import React, { useContext,useEffect } from 'react'
import { useState } from 'react'
import CardDish from './CardDish';
import './FilteredDishes.scss'
import Pagination from './Pagination';
import { AllMenuContext } from './AllMenuContext';
// import { Container } from 'react-bootstrap';


function FilteredDishes() {
 


    const [menuCategory, setMenuCategory] = useState([])
    const [singleDish, setSingleDish] = useState([])
      // use context
      const allMenus = useContext(AllMenuContext)

      let [filteredDishes,setFilteredDishes]=useState([])
      let [activeDish,setActiveDish]=useState("Beef")
      let [currentPage,setCurrentPage]=useState(1)
      let [itemsPerPage,setItemsPerPage]=useState(4)

  
    // get category list
    async function getAllTheCategories() {
        const API_URl = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URl)
        let data = await response.json()
        setMenuCategory(data.categories)
    }

    // get only one dish 
    async function getOnlyOneDish() {
        const API_URl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response = await fetch(API_URl)
        let singleData = await response.json()

        setSingleDish(singleData.meals)
    }


    useEffect(() => {
        
        getAllTheCategories()
        getOnlyOneDish()

    }, [])
  

    let indexOfLastDish= currentPage * itemsPerPage
    // 1*4=4   2*4=8  3*4=12
    let indexOfFirstDish = indexOfLastDish - itemsPerPage
    // 4-4=0  8-4 =4  12-4=8
    
    let showTheDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)

  

    // single product mapping
    let maxItem = 1
    let singleDishItems=singleDish.map((item,index)=>{
        if(index < maxItem){
             
            return(
                <div >
                    <li >
                        <img src={item.strMealThumb} alt="" className='filter br-10 '  />
                        <h5>{item.strMeal}</h5>
                    </li>
                 </div>
            )
        }
       
    })

   // show dishes onclick
    function showFilterdDishesHandler(category){
        setActiveDish(category)
        setSingleDish([])// single product empty
    let filteredDishesAre = allMenus.filter((menuItem)=>{
  
        return menuItem.strCategory === category
     }).map((menuItem)=>{
        return(
           
               <CardDish menuItem={menuItem} />
                
          
        )
     })
     setFilteredDishes(filteredDishesAre)

    }
    //mapping category
    let allCategories = menuCategory.map((item) => {
        return (
            
                <li className={item.strCategory == activeDish ? "active" : ""} onClick={()=>{showFilterdDishesHandler(item.strCategory)}}>{item.strCategory}</li>
           
        )
    })
   

// rendering
    return (
        // <Container>
        <div className='filterd-dishes'>
            <div className="container">
                <div className="text-center">
                    <h2>Choose your dishes</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquameritatis accusantium!</p>
                </div>
                <div className="filterd-dishes">
                    <ul>

                        {allCategories}

                    </ul>
                </div>
              
                   <div className="filtered-dishes-results">
                     <ul className='flex flex-wrap gap' >
                        {singleDishItems}
                        {singleDishItems !=0 || filteredDishes.length != 0 ? showTheDishesNow :
                         <div className='alert'>
                            <h3>Sorry try another dishes</h3>
                            <h4>Please choose dish</h4>
                         </div>  }
                      
                     </ul>
                   </div>
                  
                   
            </div>
            
                   <Pagination filteredDishes = {filteredDishes} 
                   itemsPerPage={itemsPerPage} 
                   currentPage ={currentPage} 
                   setCurrentPage={setCurrentPage}/>
        </div>
        // </Container>
    )
}

export default FilteredDishes