import React, { useContext, useEffect, useState } from "react";
import "../style/addincome.css";
import History from "./History";
import Form from "./Form";
import { Expenses, delExpense, getexpense } from "../Api";
import ContextProvider from "../context/ContextProvider";
import { Today, calculateBalance } from "../TodayExpense";
import Sidebar from "../sidebar/Sidebar";
import Swal from "sweetalert2";
const Addexpense = () => {
  const {setExpenses,setLoader,setOpened,Opened,Incomes,Expensess,Recentes,setRecents,recentTrans}=useContext(ContextProvider)
  const [expense, setExpense] = useState([]);
  const[change,setChange]=useState(true)
  const[amount,setAmount]=useState(0);


  useEffect(() => {
    const getExp = async () => {
      let res = await getexpense();
      if(res.Expense){

        setExpense(res.Expense);
        setExpenses(res.Expense);
      }
      else{
        alert("something went wrong");
      }
      setOpened(false);
      let amount = await Today(res.Expense);
      setAmount(amount)
      
      
    };
    getExp();
  }, [change]);


const handleSubmit = async(e)=>{
 e.preventDefault()
let currentBalance=calculateBalance(Incomes,Expensess);

    let form = e.target
    let formData = new FormData(form)
    let formObj = Object.fromEntries(formData.entries());
    if(currentBalance<formObj.amount){
      Swal.fire({
        text:"you dont have enough money",
        icon:'error',
        confirmButtonAriaLabel:true
      })
      return;
     }
     formObj.userId=localStorage.getItem("userId");
     formObj.type = "expense";
    setLoader(true);
    let res = await Expenses(formObj);
    setLoader(false)
    if(res.success){
      recentTrans.push(formObj);
 
  setRecents(recentTrans);

  Swal.fire({
    text:res.message,
    icon:'success',
    
  })
    setChange(!change)
   }
   else if(!res.success){
    Swal.fire({
      text:res.error,
      icon:'error',
      confirmButtonAriaLabel:true
    })
   }
}
  return (
    <div style={{display:'flex',justifyContent:'space-between',width:'98%',gap:"14px"}}  className="sides">
<Sidebar/>
    <main className="main">

            <div className='ham' onClick={()=>setOpened(Opened=>!Opened)}>{
              Opened?'Close':"Menu"
            }</div>
      <h1 style={{ textAlign: "center", background: "white", padding: "7px" }}>
        Total expense <small>(today): $ {amount}</small>
      </h1>
      <div className="flex" style={{ display: "flex" }}>
        <Form handleSubmit={handleSubmit} Form={'Add Expense'}  change={change} setChange={setChange} />
        <div>
        <h3 style={{textAlign:'center'}}>History</h3>
          {expense.length===0?'':expense.map((data) => (
           <History Delete={delExpense} change={change} setChange={setChange}  data={data} key={data._id} />
          ))}
        </div>
      </div>
    </main>
    </div>
  );
};

export default Addexpense;
