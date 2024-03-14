import React from 'react'
import { MdAttachMoney } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";


import '../style/addincome.css'


const Recent = ({data}) => {
  return (
    
      <div className="section">
      <MdAttachMoney size={45}/>
    
    <div> 
      <strong > {data.title}</strong><br />
     <small >{data.amount}/- </small> <FaRegCommentDots/> <small >{data.reference}</small>
    </div>
    <div>
        {data.type=='expense'?<small style={{color:'red'}}>expense</small>:<small style={{color:'green'}}>income</small>}
      </div>
    
   
    </div>
    
  )
}

export default Recent
