import React from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

 import Card from "../UI/Card.js";



 const Expenses = (props)=>{



      return(
            <Card className="expenses">

                 {
                    props.item.map(
                          expense =>{ 
                                console.log(expense);
                                return (
                                    <ExpenseItem
                                    date={ expense.date }
                                    title={expense.title}
                                    amount={expense.Amount}  />
                                 )
                          }

                        )
                  }

             
            </Card>
      );
}


export default Expenses;