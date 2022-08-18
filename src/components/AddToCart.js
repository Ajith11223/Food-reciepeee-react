import './AddToCart.scss'
import { stateContext } from '../Context/AppProvider'
import { useContext } from 'react'

const AddToCart = ({addToCartItem})=>{

const cartPackage = useContext(stateContext)

   let allCart = cartPackage.cartItems.map((item)=>{
    return(
        <div>
           <img src={item.img} alt="" />
            <h5>{item.title}</h5>
        </div>
    )
  })     
    return(
       <div className="add-to-cart-wrapper">
          <div className="add-to-cart-item">
            {/* <h6 className='text-center'>Your cart items here</h6> */}
            {allCart}
          </div>

       </div>
    )
}


export default AddToCart