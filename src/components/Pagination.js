import React from 'react'
import './Pagination.scss'

function Pagination(props) {
    let numberOfPages = [];
    let page = props.itemsPerPage
    for (let i = 1; i <= Math.ceil(props.filteredDishes.length/page); i++) {
        numberOfPages.push(i)
    }

    function showNextDishesHandler(event){
       // event.terget.id inbuild aane id value kittum
        props.setCurrentPage(event.target.id)
   
    }

    let pages = numberOfPages.map((pageNumber)=>{
        
        return(
           
                <li id={pageNumber} onClick={showNextDishesHandler}>{pageNumber}</li>
            
        
        )
    })




return (
        <section>
            <ul className="pagination">
                <li> {pages}</li>
               
            </ul>
        </section>

    )
}

export default Pagination