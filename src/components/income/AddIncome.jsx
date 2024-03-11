import React, { useContext, useEffect, useState } from "react";
import "../style/addincome.css";
import History from "./History";
import Form from "./Form";
import { addIncome, getIncome } from "../Api";
import ContextProvider from "../context/ContextProvider";
const AddIncome = () => {
  const {setIncomes}=useContext(ContextProvider)
  const [income, setIncome] = useState([{}]);
  const[change,setChange]=useState(true)


  useEffect(() => {
    const getIncom = async () => {
      let res = await getIncome();
      setIncome(res.Income);
      setIncomes(res.Income)
      
      
    };
    getIncom();
  }, [change]);

let amount=0;
  income.forEach(data => {
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

  let res = await addIncome(formObj);
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
        Total Income <small>(today): $ {amount}</small>
      </h1>
      <div style={{ display: "flex" }}>
        <Form handleSubmit={handleSubmit} Form={'Add Income'} change={change} setChange={setChange} />
        <div>
          {income.length===0?'':income.map((data) => (
           <History change={change} setChange={setChange}  data={data} key={data._id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AddIncome;
