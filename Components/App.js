import React,{useState} from 'react';
// import ExpenseItem from './Components/ExpenseItem';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpenses from './Components/NewExpense/NewExpenses';




const DUMMY_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];




const App=()=> {
  const[expenses, setExpenses]=useState(DUMMY_Expenses);

  const addExpenseHandler = (expense) => {
   setExpenses((prevExpenses)=>{
    return [ expense, ...prevExpenses];
   });
  };
  
  return (

    
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>

    </div >
  );
}

export default App;
