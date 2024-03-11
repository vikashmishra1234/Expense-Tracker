import React, { useContext, useEffect, useState } from "react";
import "../style/addincome.css";
import History from "./History";
import Form from "./Form";
import { Expenses, getexpense } from "../Api";
import ContextProvider from "../context/ContextProvider";
const Addexpense = () => {
  const {setExpenses}=useContext(ContextProvider)
  const [expense, setExpense] = useState([]);
  const[change,setChange]=useState(true)


  useEffect(() => {
    const getExp = async () => {
      let res = await getexpense();
  
      setExpense(res.Expense);
      setExpenses(res.Expense)
      
      
    };
    getExp();
  }, [change]);

let amount=0;
  expense.forEach(data => {
    var d = new Date(data.createdAt);
    let tarik= d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
    let date = new Date()
    let today= date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
    if(tarik===today){
      amount=amount+data.amount
    }
});
const handleSubmit = async(e)=>{
    e.preventDefault()
    let form = e.target
    let formData = new FormData(form)
    let formObj = Object.fromEntries(formData.entries())
  
    let res = await Expenses(formObj);
   if(res.success){
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
      <div style={{ display: "flex" }}>
        <Form handleSubmit={handleSubmit} Form={'Add Expense'}  change={change} setChange={setChange} />
        <div>
          {expense.length===0?'':expense.map((data) => (
           <History change={change} setChange={setChange}  data={data} key={data._id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Addexpense;
