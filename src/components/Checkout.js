
import { stateContext } from "../Context/AppProvider"
import { useContext } from "react"
import './checkout.scss'
// import { Container } from 'react-bootstrap';


const Checkout = () => {
    const cartPackage = useContext(stateContext)

    let allCart = cartPackage.cartItems.map((item) => {
        return (
       
                <div >
                    <img className="b" src={item.img} alt="" />
                    <h4>{item.title}</h4>
                </div>
    
        )
    })
    return (
        // <Container>
        <div className="checkout">

            <h2>Cart items</h2>
            <div className="flexBox">
            {allCart}
            </div>
          
            {/* <img src={cartPackage.cartItems[0]} alt="" />
            <h5>{cartPackage.cartItems[1]}</h5> */}
        </div>
        // </Container>
    )
}

export default Checkout