import { useContext } from 'react';
import {GlobelContext} from './GlobelState'

//7th component
export default (state, action) =>{
    // const {transection} = useContext(GlobelContext) 
    const transection = state.transection
    console.log(transection)
    
    switch(action.type){
        case 'DELETE_TRANSECTION':
        return {
            ...state, transection:transection.filter(transec =>transec.id !== action.payload)
        }
        case 'ADD_TRANSECTION':
            return {
                ...state, transection:[...state.transection, action.payload]
            }
        default:
            return state
    }
}