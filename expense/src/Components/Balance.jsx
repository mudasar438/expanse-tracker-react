import React from "react";
import {GlobelContext} from './GlobelState'
import { useContext } from "react";
//2nd componennt

//  4 data gets using useContext from GlobelContext 
const Balance = () => {
  const {transection} = useContext(GlobelContext) 
  // amount get from transection and using map function store in amount constant and the using reduce methord of arry total in total const
  const amount = transection.map(transec =>(transec.amount))
  const total = amount.reduce((acc, item)=> (acc +=item), 0).toFixed(2);
  return <>
  <div className="balance">
  <h4>Your Balance</h4>
  <h1 id="balance">$ {total} </h1>
  </div>
  
  </>;
};

export default Balance;
