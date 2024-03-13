import React, { useContext, useState } from 'react'
import '../style/style.css'
import { MdAttachMoney } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from 'react-router-dom';
import ContextProvider from '../context/ContextProvider';
const Sidebar = () => {
  const {Opened } = useContext(ContextProvider);
  return (
    <aside style={{display:Opened?'block':''}} className='aside'>
        <nav className='nav'>
       <header className='header'>
        
        <img src="https://static.vecteezy.com/system/resources/previews/009/566/755/original/money-bag-icon-money-bag-logo-illustration-isolated-on-white-background-editable-stroke-vector.jpg" alt="" />
       <div>Mons <br /> <small style={{fontSize:'13px'}}>your money tracker</small></div> </header> 

      <ul>
        <li><LuLayoutDashboard/> <Link to="/dashboard">Dashboard</Link></li>
        <li><MdAttachMoney size={30}/> <Link to="/income">income</Link></li>
        <li><FcMoneyTransfer size={28}/> <Link to="/expense">expense</Link></li>
      </ul>
        </nav>
    </aside>
  )
}

export default Sidebar
