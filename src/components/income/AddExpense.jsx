import React, { useContext, useEffect, useState } from "react";
import "../style/addincome.css";
import History from "./History";
import Form from "./Form";
import { Expenses, delExpense, getexpense } from "../Api";
import ContextProvider from "../context/ContextProvider";
import { Today, calculateBalance } from "../TodayExpense";
const Addexpense = () => {
  const {setExpenses,Incomes,Expensess,Recentes,setRecents,recentTrans}=useContext(ContextProvider)
  const [expense, setExpense] = useState([]);
  const[change,setChange]=useState(true)
  const[amount,setAmount]=useState(0);


  useEffect(() => {
    const getExp = async () => {
      let res = await getexpense();
      setExpense(res.Expense);
      setExpenses(res.Expense);
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
      alert("not enough money");
      return;
     }
    let res = await Expenses(formObj);
    if(res.success){
      recentTrans.push(formObj);
 
  setRecents(recentTrans);

    alert(res.message);
    setChange(!change)
   }
   else if(!res.success){
    alert(res.error)
   }
}
  return (
    <main className="main">
      <h1 style={{ textAlign: "center", background: "white", padding: "7px" }}>
        Total expense <small>(today): $ {amount}</small>
      </h1>
      <div className="flex" style={{ display: "flex" }}>
        <Form handleSubmit={handleSubmit} Form={'Add Expense'}  change={change} setChange={setChange} />
        <div>
          {expense.length===0?'':expense.map((data) => (
           <History Delete={delExpense} change={change} setChange={setChange}  data={data} key={data._id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Addexpense;
