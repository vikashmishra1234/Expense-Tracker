import React, { useContext, useEffect } from 'react'
import Chart from './Chart'
import Recent from './Recent'
import '../style/style.css'
import ContextProvider from '../context/ContextProvider'
import { getIncome, getexpense } from '../Api'
import Balance from './Balace'

const Dashboard = () => {
    const {recentTrans,Recentes,setIncomes,setExpenses} = useContext(ContextProvider);
    console.log(Recentes);
    useEffect(() => {
        const getIncom = async () => {
          let res = await getIncome();
          let res2 = await getexpense();
          setExpenses(res2.Expense);
          setIncomes(res.Income);
          
         
        };
        getIncom();
      }, []);
    
    
  return (
    <>
    <div style={{paddingTop:'20px'}}>

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
    <footer>
    <Balance/>
    </footer>
    </div>
    </>
  )
}

export default Dashboard
