export interface product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating:{
    rate: number;
    count: number
  }
}

export const getData = (setData: React.Dispatch<React.SetStateAction<never[]>>) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
}
// export const getJewelery = (setData: React.Dispatch<React.SetStateAction<never[]>>) => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => setData(res.filter((item:product)=>item.category == 'jeweley')))
// }