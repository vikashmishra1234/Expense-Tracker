import React, { useEffect, useState } from 'react'
import ContextProvider from './ContextProvider.jsx';
const recentTrans=[];

const ContextState = (props) => {
    const [Expensess,setExpenses]=useState([]);
    const [Incomes,setIncomes]=useState([]);
    const [Recentes,setRecents]=useState([]);
    const [Changes,setChanges]=useState(false);
    const [CurrentBalance,setCurrentBalance]=useState(0);

   
    let arr = [];
 
  return (
    <ContextProvider.Provider value={{Expensess,Incomes,CurrentBalance,Recentes,recentTrans,Changes,setCurrentBalance,setChanges,setRecents,setIncomes,setExpenses}} >
        {props.children}
    </ContextProvider.Provider>
  )
}

export default ContextState
