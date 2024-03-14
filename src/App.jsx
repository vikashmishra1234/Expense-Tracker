import React from 'react';

import SingUp from './components/Authentication/SingUp';
import Login from './components/Authentication/Login';
import AddIncome from './components/income/AddIncome';
import AddExpense from './components/income/AddExpense';

import Dashboard from './components/Dashboard/Dashboard';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContextState from './components/context/ContextState';
const App = () => {
  return (
    
    <ContextState>

    <div style={{display:'flex',gap:'20px'}}>
      <Router>
    
        <Routes>
         
          <Route exact path='/' element={<SingUp/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/dashboard' element={<Dashboard />}/>
          <Route exact path='/income' element={<AddIncome/>}/>
          <Route exact path='/expense' element={<AddExpense/>}/>
        </Routes>

      </Router>
      </div>
    </ContextState>

    
  )
}

export default App
