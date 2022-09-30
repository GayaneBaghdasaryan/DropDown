import { useState } from "react"
import { Clothing } from "../Products/Clothing"
import { Electronics } from "../Products/El"
import { Jewelery } from "../Products/Jewelery"

import './style.css'



export const DropDown= () => {

    const [open, setOpen] = useState<boolean>(false)
    const [showClth, setShowClth] = useState<boolean>(false)
    const [showEl, setShowEl] = useState<boolean>(false)
    const [showJwl, setShowJwl] = useState<boolean>(false)
    
    return(
        <div className="wrapper">
            <div className="selector">
                <div className="feild">
                        <button className="btn" 
                            onClick={()=>{
                            setOpen(!open)
                        }}>Select</button>
                </div>            
                {open && (
                    <div className="variantes">
                        <p onClick={()=>{
                            setShowEl(!showEl)
                            setOpen(!open)
                            }}>Electronics</p>                  
                        <p onClick={()=>{
                            setShowJwl(!showJwl)
                            setOpen(!open)
                            }}>Jewelery</p>
                        <p onClick={()=>{
                            setShowClth(!showClth)
                            setOpen(!open)
                            }}>Clothing</p>
                    </div>                
                )}
            </div>
            <div className="products">
                {showClth && <Clothing/> }
                {showJwl && <Jewelery/> }
                {showEl && <Electronics/> }                
            </div>                
        </div>
    )
}
