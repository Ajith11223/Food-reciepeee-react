import { createContext, useReducer } from "react"

 const DispatchContext = createContext()
 const stateContext = createContext()
 const AppProvider =({children})=>{

const initialState ={
    cartItems : []
}

   const reducer = (state,action)=>{
  
    switch(action.type){
        
        case 'add_to_cart' :
            return {...state,cartItems : [...state.cartItems,action.payload]};

        default :{
            return state
        }
    }
   }

    let [state,dispatch] = useReducer(reducer,initialState)
    console.log(state);
    return(
<DispatchContext.Provider value={dispatch}>
    <stateContext.Provider value={state}>
{children}
    </stateContext.Provider>
</DispatchContext.Provider>
    )
}

 export {AppProvider,DispatchContext,stateContext}