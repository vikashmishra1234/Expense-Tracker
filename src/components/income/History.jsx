import React, { useContext, useState } from "react";
import { MdAttachMoney } from "react-icons/md";
import "../style/addincome.css";
import { FaCodeFork, FaRegCommentDots } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { delIncome } from "../Api";
import ContextProvider from "../context/ContextProvider";
let cost=[];


const History = ({data}) => {
  const {setAmount} = useContext(ContextProvider);
  var d = new Date(data.createdAt);
  let tarik= d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
  let date = new Date()
  let today= date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
  if(today===tarik){
    tarik='today'

  }


 
  return (
    <div className="section">
      <MdAttachMoney size={45}/>
    <div> 
      <strong>{data.title}</strong><br />
      {data.amount}/- <FaRegCommentDots/> {data.reference}
    </div>
    <div >
      {tarik}
    </div>
   
    </div>
  );
};

export default History;
