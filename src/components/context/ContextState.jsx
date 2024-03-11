import React, { useState } from 'react'
import ContextProvider from './ContextProvider.jsx';

const ContextState = (props) => {
    const [Expenses,setExpenses]=useState([]);
    const [Incomes,setIncomes]=useState([]);
    let arr = [];
  return (
    <ContextProvider.Provider value={{Expenses,Incomes,setIncomes,setExpenses}} >
        {props.children}
    </ContextProvider.Provider>
  )
}

export default ContextState
