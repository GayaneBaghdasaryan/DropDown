import { useEffect, useState } from "react"
import { getData, product } from "../../Data"
import './style.css'

export const Jewelery = () =>{
    
    const [data, setData] = useState([])
    useEffect(()=>{
        getData(setData)
      },[])

    const clothing = data.filter((item:product)=>item.category === "jewelery")

    return(
         <div className="jwl">
            <div className="jwl-name">
              <h2>Jewelery</h2>  
            </div>
            <div className="jwl-item"> 
                {clothing.map((item:product, key:number)=>(
                    <div key={item.id + 5} className='jwl-info'>
                        <h3>{item.title}</h3>
                        <img src={item.image} />
                    </div>
                ))}                
            </div>

        </div>
    )
}