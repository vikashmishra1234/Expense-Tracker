import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ContextState from './context/ContextState';
import Dashboard from './Dashboard/Dashboard';
import AddIncome from './income/AddIncome';
import AddExpense from './income/AddExpense';
import Sidebar from './sidebar/Sidebar';
import SingUp from './Authentication/SingUp';
import Login from './Authentication/Login';




const Compoents = () => {
  return (
    <ContextState>

    <div style={{display:'flex',gap:'20px'}}>
      <Router>
    
        <Routes>
         
          <Route exact path='/' element={localStorage.getItem("userId")?<Dashboard key={1}/>:<SingUp key={32}/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/dashboard' element={<Dashboard key={21}/>}/>
          <Route exact path='/income' element={<AddIncome/>}/>
          <Route exact path='/expense' element={<AddExpense/>}/>
        </Routes>

      </Router>
      </div>
    </ContextState>
  )
}

export default Compoents
