import { Route, Routes } from "react-router-dom";
import "./Menus.scss";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";
import AddToCart from "./AddToCart";
import {AppProvider} from '../Context/AppProvider'



// create a global context thats shareed to its children
// export const AllMenuContext = React.createContext()



function Menus() {

    return (
        <div >
            {/* <AllMenuContext.Provider value={menu}> */}
            <AppProvider>

            <Header />
            <Hero />
            <Routes>
                <Route path="/" element={<AllMenus>
                    <SpecialDishes />
                    <FilteredDishes />
                </AllMenus>} />
                {/* page 2 */}
                <Route path="/checkout" element={<Checkout /> } />
               <Route path="/cart" element={<AddToCart/>}/>
            </Routes>


            </AppProvider>

            {/* </AllMenuContext.Provider> */}
        </div>
   
    )
}


export default Menus