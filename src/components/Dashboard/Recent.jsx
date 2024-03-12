import React from 'react'
import { MdAttachMoney } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";


import '../style/addincome.css'


const Recent = ({data}) => {
  return (
    
      <div className="section">
      <MdAttachMoney size={45}/>
    <div> 
      <strong>{data.title}</strong><br />
      {data.amount}/- <FaRegCommentDots/> {data.reference}
    </div>
    
   
    </div>
    
  )
}

export default Recent
