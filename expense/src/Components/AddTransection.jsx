import React from 'react'
import { useContext, useState } from 'react';
import {GlobelContext} from './GlobelState'
//5th component

const AddTransection = () => {
  const [text, setText] =useState('')
  const [amount, setAmount] =useState()

  const {AddTransection} =useContext(GlobelContext)
  // console.log(AddTransection)
  const onSubmit = e=>{
    e.preventDefault();
    const newTransection = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount :+ amount

    }
    AddTransection(newTransection)
  }
  return (
    <>
    <h3 className='h3'>Add  new Transection</h3>
    <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="amount">Text

            </label>
            <input type="text" placeholder='Enter text'value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br /> (Nagative - expance, positive - income)

            </label>
            <input type="text" placeholder='Enter amount' value={amount} onChange={(e)=> setAmount(e.target.value)}/>
        </div>
        <button type='sunmit' className='btn'>Add Transection</button>


    </form>
    </>
  )
}

export default AddTransection