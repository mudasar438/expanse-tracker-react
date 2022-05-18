import React from 'react'
import {GlobelContext} from './GlobelState'
import { MdDeleteForever } from "react-icons/md";
import Transection from './Transection';
import { useContext } from 'react'
// 4th component

const TransectionList = () => {
  
  // 2 data come form GlobelState import GlobelContext and store Transection using useContext
  const {transection} = useContext(GlobelContext)
  // console.log({transection});
  return (
    <>
    <h3>History</h3>
    <ul id='list' className='list'>
       {/* map data pass us ing props transection */}
      {transection.map(transec =>(
      <Transection key={transec.id} transection={transec} />
      ))}
        
    </ul>
    
    
    </>
  )
}

export default TransectionList