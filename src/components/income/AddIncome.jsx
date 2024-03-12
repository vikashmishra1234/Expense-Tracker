import React, { useContext, useEffect, useState } from "react";
import "../style/addincome.css";
import History from "./History";
import Form from "./Form";
import { addIncome, delIncome, getIncome } from "../Api";
import ContextProvider from "../context/ContextProvider";
import { Today } from "../TodayExpense";
const AddIncome = () => {
  const {setIncomes,setRecents,Recentes,recentTrans}=useContext(ContextProvider)
  const [income, setIncome] = useState([{}]);
  const[change,setChange]=useState(true);
  const[amount,setAmount]=useState(0);


  useEffect(() => {
    const getIncom = async () => {
      let res = await getIncome();
      setIncome(res.Income);
      setIncomes(res.Income);
     let Amount =await Today(res.Income);   
     setAmount(Amount)
    };
    getIncom();
  }, [change]);


const handleSubmit = async(e)=>{
  e.preventDefault()
  let form = e.target
  let formData = new FormData(form)
  let formObj = Object.fromEntries(formData.entries())

  let res = await addIncome(formObj);
 if(res.success){
  recentTrans.push(formObj);
  
  setRecents(recentTrans)
  console.log(Recentes)
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
        Total Income <small>(today): $ {amount}</small>
      </h1>
      <div className="flex" style={{ display: "flex" }}>
        <Form handleSubmit={handleSubmit} Form={'Add Income'} change={change} setChange={setChange} />
        <div>
          {income.length===0?'':income.map((data) => (
           <History Delete={delIncome} change={change} setChange={setChange}  data={data} key={data._id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AddIncome;
