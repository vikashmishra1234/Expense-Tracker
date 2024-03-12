import React, { useContext, useEffect } from 'react';
import AddIncome from './components/income/AddIncome';
import Sidebar from './components/sidebar/Sidebar';
import ContextState from './components/context/ContextState';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddExpense from './components/income/AddExpense';
import Dashboard from './components/Dashboard/Dashboard';
const App = () => {
  return (
    <ContextState>

    <div style={{display:'flex',gap:'20px'}}>
      <Router>

        <Sidebar/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route exact path='/income' element={<AddIncome/>}/>
          <Route exact path='/expense' element={<AddExpense/>}/>
        </Routes>

      </Router>
    
    </div>
    </ContextState>
  )
}

export default App
