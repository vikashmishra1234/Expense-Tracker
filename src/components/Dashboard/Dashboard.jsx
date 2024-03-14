import React, { useContext, useEffect } from 'react'
import Chart from './Chart'
import Recent from './Recent'
import '../style/style.css'
import ContextProvider from '../context/ContextProvider'
import { getIncome, getexpense } from '../Api'
import Balance from './Balace'
import Sidebar from '../sidebar/Sidebar'
import Swal from 'sweetalert2'

const Dashboard = () => {
    const {setOpened,Opened,user,Recentes,setIncomes,setExpenses} = useContext(ContextProvider);
    useEffect(() => {
        const getIncom = async () => {
          setOpened(false)
         
          
          let res = await getIncome();
          let res2 = await getexpense();
          if(res.Income){

            setIncomes(res.Income);
          }
          if(res2.Expense){

            setExpenses(res2.Expense);
          }
          else{
            Swal.fire({
              text:"something went wrong",
              icon:'error',
              confirmButtonAriaLabel:true
            })
          }
          
         
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
