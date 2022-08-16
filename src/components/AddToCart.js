import './AddToCart.scss'

const AddToCart = ({addToCartItem})=>{

  let addToCartResult = addToCartItem.map((item)=>{
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
            <h6 className='text-center'>Your cart items here</h6>
           {addToCartResult}
          </div>

       </div>
    )
}


export default AddToCart