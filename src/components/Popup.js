import React, { useContext } from 'react'
import './Popup.scss'
import { AllMenuContext } from './AllMenuContext'
 import {DispatchContext} from '../Context/AppProvider'




function Popup({closePopupHandler,currentDish,addToCartHandler}) {
    const allMenus = useContext(AllMenuContext)
    const dispatch = useContext(DispatchContext)
    
let dishDetails=allMenus.filter((menuItem)=>{
    return menuItem.strMeal == currentDish
}).map((item)=>{
    return (
        <div className='popup-content-data'>
               <div className='popup-header'>
               <img src={item.strMealThumb} alt="" />
             </div>
             <h2 >{item.strMeal}</h2>
            <h5 className='popup-category'>{item.strCategory}</h5>
            <button onClick={()=> 
                dispatch({type:'add_to_cart' ,
                payload:{
                    img :item.strMealThumb,
                    title :item.strMeal
                }})} >Order Now</button>


            <h5 className='popup-close' onClick={closePopupHandler}>close</h5>
            {/* <h3>Rs 199</h3> */}
          
        </div>
    )
})

  return (
    <div className='popup'>
        <dv className="popup-content">
            {dishDetails}
          
           
        </dv>

    </div>
  )
}

export default Popup