import React from 'react'
import {GlobelContext} from './GlobelState'
import { useContext } from "react";
//3rd component

// data gets using props in transection const 
const  Income= () => {
  const {transection} = useContext(GlobelContext)
  const amount = transection.map(transec =>(transec.amount))
  const total = amount.reduce((acc, item)=> (acc +=item), 0).toFixed(2);
  // calculate income and expance
  const income = amount
  
  .filter(item => item > 0)
  .reduce((acc, item)=> (acc +=item), 0).toFixed(2)
  const expense =( amount  .filter(item => item < 0)
  .reduce((acc, item)=> (acc +=item), 0) * -1).toFixed(2)
  return (
        
      <div className='inc-ex-trac'>
        <div className="">
            <h4 className='mony'>Income</h4>
            <p id='money-plus' className='mony plus'>{income}</p>
        </div>
        <div className="expance">
            <h4 className='mony'>Expance</h4>
            <p id='money-minus' className='mony'>{expense}</p>
        </div>



    </div>

  )
}

export default Income;