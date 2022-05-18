import React, { useReducer } from 'react'
import { MdDeleteForever } from "react-icons/md";
import '../commenStyle.css'
import { useContext } from 'react';
import {GlobelContext} from './GlobelState'

// 3 props gets from Transectionlist and use to show data in the list & delete list using id
const Transection = ({transection}) => {
    const {deleteTransection}= useContext(GlobelContext);

    

    const sign = transection.amount < 0 ? '-' : '+';

//    console.log(transection.text)
  return (<>
    <li className='minus'>
         <div> 
             {transection.text} 
         </div>
         <span>{sign}$ {Math.abs(transection.amount)}</span>
         <button onClick={()=> deleteTransection(transection.id)} ><MdDeleteForever/></button>
    </li>
  </>
  )
}

export default Transection