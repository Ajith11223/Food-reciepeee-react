import React from 'react'
import './Header.scss'
import {Link} from "react-router-dom"


function Header() {
  return (
    <div>
        <header className="flex flex-center flex-between">
            <Link to="/" className='logo'>
                Food Dairy
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                       <Link to="/cart"> Cart</Link>
                       
                    </li>
                </ul>
            </nav>
        </header>

    </div>
  )
}

export default Header