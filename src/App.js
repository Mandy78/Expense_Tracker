import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses.js";

import NewExpense from "./components/NewExpense/NewExpense.js";

let dExp=[
  {
    
    date: new Date(2022,4,1),
    title:"COLLEGE FEE",
    Amount:800
  },
  {
    
    date: new Date(2022,4,2),
    title:"SHOPPING",
    Amount:500
  },
  {
    
    date: new Date(2022,4,5),
    title:"RENT",
    Amount:300
  },
  {
    
    date: new Date(2022,4,6),
    title:"HOUSEHOLD",
    Amount:100
  }


];


const App= () =>{
     
     
     const [expenses , setExpense]=useState(dExp);

     const addExpenseHandler = (newExp) => {
        const uExp=[newExp , ...dExp]; 
         
        setExpense(uExp);
     }
      
 
  

    return(<div>
              <NewExpense onAddExpense={addExpenseHandler}/>
              <Expenses item={expenses}/>
            </div>
    )
 
}
export default App;