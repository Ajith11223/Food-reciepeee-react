import React, { useContext, useState } from 'react'


import CardDish from './CardDish'
import './SpecialDishes.scss'
import Popup from './Popup'
import { AllMenuContext } from './AllMenuContext'
import AddToCart from './AddToCart'

function SpecialDishes(props) {
    

    let [showPopup, setShowPopup] = useState(false)
    let [currentDish, setCurrentDish] = useState('')
    let [addToCartItem,setAddToCartItem]=useState([])

    // useContext
    const allMenus = useContext(AllMenuContext)

    function showPopupHandler(dishName) {
        setShowPopup(true)
        setCurrentDish(dishName)
    }
    function closePopupHandler() {
        setShowPopup(false)
    }

    // add to cart handler
    function addToCartHandler(adTocartImg,addToCartTitle){
      setAddToCartItem(
        [
            ...addToCartItem,
            {
                img : adTocartImg,
                title : addToCartTitle
            }
        ]
      )
        
    }
// special menu  
    let maxSpecialDishes = 6
    let specialMenus = allMenus.map((menuItem, index) => {
        if (index < maxSpecialDishes) {
            return (


                <CardDish menuItem={menuItem}
                    showPopup={showPopupHandler} />
            )
        }

    })

    return (

        <section className='special-dishes'>
            {showPopup && <Popup closePopupHandler={closePopupHandler}
             currentDish={currentDish} addToCartHandler={addToCartHandler}
              />}
              

            <div className="container">
                <AddToCart addToCartItem={addToCartItem}/>
                <div className="special-dishes-content text-center">
                    <h1>Our Special Dishes</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus non animi dolor ipsum ea omnis asperiores accusantium.</p>
                </div>
                <div className="special-dishes-list">
                    <ul className='flex flex-wrap gap'>
                        {specialMenus}

                    </ul>
                </div>
            </div>


        </section>
    )
}

export default SpecialDishes