import React, { useContext, useEffect, useState } from "react";
import "../style/addincome.css";
import History from "./History";
import Form from "./Form";
import { addIncome, delIncome, getIncome } from "../Api";
import ContextProvider from "../context/ContextProvider";
import { Today } from "../TodayExpense";
import Sidebar from "../sidebar/Sidebar";
import Swal from "sweetalert2";
const AddIncome = () => {
  const {setIncomes,setOpened,Opened,setRecents,user,recentTrans}=useContext(ContextProvider)
  const [income, setIncome] = useState([{}]);
  const[change,setChange]=useState(true);
  const[amount,setAmount]=useState(0);


  useEffect(() => {
    const getIncom = async () => {
      let res = await getIncome();
      if(res.Income){

        setIncome(res.Income);
        setIncomes(res.Income);
      }
      else{
        Swal.fire({
          text:"something went wrong",
          icon:'error',
          confirmButtonAriaLabel:true
        })
      }
      setOpened(false);
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
  formObj.userId = localStorage.getItem("userId");
  formObj.type="income";
  console.log(formObj)
  let res = await addIncome(formObj);
 if(res.success){
  recentTrans.push(formObj);
  
  setRecents(recentTrans)
  
  Swal.fire({
    text:res.message,
    icon:'success',
    confirmButtonAriaLabel:true
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
    <div style={{display:'flex',justifyContent:'space-between',width:'98%',gap:"14px"}} className="sides">
<Sidebar/>
    <main className="main">
            <div className='ham' onClick={()=>setOpened(Opened=>!Opened)}>{
               Opened?'Close':"Menu"
            }</div>

      <h1 style={{ textAlign: "center", background: "white", padding: "7px" }}>
        Total Income <small>(today): $ {amount}</small>
      </h1>
      <div className="flex" style={{ display: "flex" }}>
        <Form handleSubmit={handleSubmit} Form={'Add Income'} change={change} setChange={setChange} />
        <div>
          <h3 style={{textAlign:'center'}}>History</h3>
          {income.length===0?'':income.map((data) => (
           <History   data={data} key={data._id} />
          ))}
        </div>
      </div>
    </main>
    </div>
  );
};

export default AddIncome;
