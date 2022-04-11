import React, { useState } from "react";

import './ExpenseItem.css';

import ExpenseDate from "./ExpenseDate.js";

import Card from "../UI/Card.js";

const ExpenseItem= (props)=>{

    

    return( <Card className="expenseItem">
    
             <ExpenseDate date={props.date} title={props.title} amount={props.amount}/>
    
               <div className="expenseItemDescription">
                   <h2>{props.title}</h2>
                   <div className="expenseItemPrice">${props.amount}</div>
               </div>
               

            </Card>
    );
}

export default ExpenseItem;