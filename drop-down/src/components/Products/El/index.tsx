import { useEffect, useState } from "react"
import { getData, product } from "../../Data"
import './style.css'

export const Electronics = () =>{
    
    const [data, setData] = useState([])
    useEffect(()=>{
        getData(setData)
      },[])

    const clothing = data.filter((item:product)=>item.category === "electronics")

    return(
         <div className="el">
            <div>
                <h2>Electronics</h2>
            </div>
            <div className="el-item">
                {clothing.map((item:product, key:number)=>(
                    <div key={item.id + 5} className='el-info'>
                        <h3>{item.title}</h3>
                        <img src={item.image} />
                    </div>
                ))}                
            </div>

        </div>
    )
}