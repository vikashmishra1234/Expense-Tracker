import React, { useContext } from 'react'
import '../style/addincome.css'
import { addIncome } from '../Api'
import ContextProvider from '../context/ContextProvider'
const Form = ({setChange,change,Form,handleSubmit}) => {
  const {Loader}= useContext(ContextProvider);

   
  return (
    <div className='container'>
    <section>
    <form action="" onSubmit={handleSubmit}>
      <strong style={{textAlign:'center',fontSize:'22px'}}>{Form}</strong>
      <input name='title' placeholder='from where you got or expand?' type="text" />
      <input name='amount' placeholder='amount?' type="phone" />
      <input name='reference' placeholder='small description' type="text" />
      <button type="submit" >{Loader?'Please wait...':`+ ${Form}`}</button>
    </form>
    </section>
  </div>
  )
}

export default Form
