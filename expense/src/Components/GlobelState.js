import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


// 6th component
const initialState ={
    transection:[
        
    ]
}
// 1 create Context
export const GlobelContext = createContext(initialState);

//provider component

const GlobelProvider = ({children})=>{

    //usReducer
    const [state, dispatch] =useReducer(AppReducer, initialState)
    //Actions
    function deleteTransection (id){
        dispatch({
            type: "DELETE_TRANSECTION",
            payload:id
        })
        

    }
    function AddTransection (transection){
        dispatch({
            type:"ADD_TRANSECTION",
            payload:transection
        })
    }

    return(<GlobelContext.Provider value={{transection:state.transection, deleteTransection, AddTransection}}>
        {children}
    </GlobelContext.Provider>)


}
export default GlobelProvider;