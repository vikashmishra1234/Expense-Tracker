import React from 'react'
import '../style/style.css'
import { MdAttachMoney } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside className='aside'>
        <nav className='nav'>
       <header className='header'>
        
        <img src="https://static.vecteezy.com/system/resources/previews/009/566/755/original/money-bag-icon-money-bag-logo-illustration-isolated-on-white-background-editable-stroke-vector.jpg" alt="" />
       <div>Mons <br /> <small style={{fontSize:'13px'}}>your money tracker</small></div> </header> 

      <ul>
        <li><LuLayoutDashboard/> <Link to="/">Dashboard</Link></li>
        <li><MdAttachMoney size={20}/> <Link to="/income">income</Link></li>
        <li><FcMoneyTransfer/> <Link to="/expense">expense</Link></li>
      </ul>
        </nav>
    </aside>
  )
}

export default Sidebar
