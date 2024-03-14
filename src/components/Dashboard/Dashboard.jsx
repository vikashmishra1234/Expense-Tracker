import React, { useContext, useEffect } from 'react'
import Chart from './Chart'
import Recent from './Recent'
import '../style/style.css'
import ContextProvider from '../context/ContextProvider'
import { getIncome, getexpense } from '../Api'
import Balance from './Balace'
import Sidebar from '../sidebar/Sidebar'

const Dashboard = () => {
    const {setOpened,Opened,user,Recentes,setIncomes,setExpenses} = useContext(ContextProvider);
    useEffect(() => {
        const getIncom = async () => {
          setOpened(false)
         
          
          let res = await getIncome();
          let res2 = await getexpense();
          setExpenses(res2.Expense);
          setIncomes(res.Income);
          
         
        };
        getIncom();
      }, []);
    
    
  return (
    <div style={{display:'flex',justifyContent:'space-between',width:'98%'}} className='sides'>
      <Sidebar/>
          <div className='ham' onClick={()=>setOpened(Opened=>!Opened)}>{
             Opened?'Close':"Menu"
          }</div>

    <div style={{paddingTop:'20px'}}>
    <header>
    <Balance/>
    </header>

    <div  className='dashboard'>
    <Chart/>
    <div>

    <h2 style={{textAlign:'center'}}>Recent transactions</h2>
    <aside>

    {
    Recentes.length>0&&[...Recentes].reverse().map(data=>(
        <Recent key={data._id} data={data}/>
      ))
    }
    </aside>
    </div>
    </div>
   
    </div>
    </div>
  )
}

export default Dashboard
