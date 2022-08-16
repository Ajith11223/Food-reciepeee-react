import React from 'react'

function CardDish(props) {
   
    return (
       
            <li>
                <a href="javaScript:;" onClick={()=> props.showPopup(props.menuItem.strMeal)}>
                 <img src={props.menuItem.strMealThumb} alt="" className='br-10' />
                 <h4>{props.menuItem.strMeal}</h4>
                </a>
            </li>

       
    )
}

export default CardDish