import React from 'react'
import '../style/addincome.css'
import { addIncome } from '../Api'
const Form = ({setChange,change,Form,handleSubmit}) => {
   
  return (
    <div className='container'>
    <section>
    <form action="" onSubmit={handleSubmit}>
      <strong style={{textAlign:'center',fontSize:'22px'}}>{Form}</strong>
      <input name='title' placeholder='title' type="text" />
      <input name='amount' placeholder='amount' type="phone" />
      <input name='reference' placeholder='reference' type="text" />
      <button type="submit" >+ {Form}</button>
    </form>
    </section>
  </div>
  )
}

export default Form
