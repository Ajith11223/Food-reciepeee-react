import React, { useState, useEffect, useContext } from "react"


export const AllMenuContext = React.createContext()

 export const AllMenus = (props) => {

    const [menu, setMenu] = useState([])
    let [loading, setloading] = useState(true)

    async function getAllTheMenus() {
        setloading(true)
        const API_URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URl)
        let data = await response.json()
        setMenu(data.meals)
        setloading(false)

    }

    useEffect(() => {
        getAllTheMenus()


    }, [])
    return (
        <AllMenuContext.Provider value={menu} >
            {!loading ? props.children : <p>Loading</p>}

        </AllMenuContext.Provider>

    )
}



