import React, { useContext, useEffect } from 'react'
import { calculateBalance } from '../TodayExpense'
import ContextProvider from '../context/ContextProvider'

const Balance = () => {
    const {Incomes,setCurrentBalance,CurrentBalance,Expensess} = useContext(ContextProvider);
    useEffect(()=>{
        let currentBalance = calculateBalance(Incomes,Expensess);
        setCurrentBalance(currentBalance);
    })
    
  return (
    <div>
      <h2 style={{background:'white',textAlign:'center',padding:'10px'}}>Current Balance $ {CurrentBalance}/-</h2>
      
    </div>
  )
}

export default Balance
