import { useEffect, useState } from "react"
import { getData, product } from "../../Data"
import './style.css'

export const Clothing = () =>{
    
    const [data, setData] = useState([])
    useEffect(()=>{
        getData(setData)
      },[])

    const clothing = data.filter((item:product)=>item.category == "women's clothing" || item.category == "men's clothing")

    return(
         <div className="clothing">
            <div className="clt-name">
                <h2>Clothing's</h2>
            </div>
            <div className="clth-item">
                {clothing.map((item:product, key:number)=>(
                    <div key={item.id + 5} className='clth-info'>
                        <img src={item.image} />
                        <h4>{item.title}</h4>
                    </div>
                ))}                
            </div>

        </div>
    )
}