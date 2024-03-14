import React, { useContext } from 'react'
import { userLogin } from '../Api';
import { useNavigate } from 'react-router-dom';
import ContextProvider from '../context/ContextProvider';

const Login = () => {
    const Navigate = useNavigate()
    const {setUser} = useContext(ContextProvider);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        let form = e.target
        let formData = new FormData(form)
        let formObj = Object.fromEntries(formData.entries());
        let res = await userLogin(formObj);
        if(res.success){
            localStorage.setItem("userId",res.user._id) 
            setUser(res)
            alert(res.message);
            Navigate('/dashboard');
          
            localStorage.setItem("token",res.token);

        }
        else{
            alert(res.error);
        }
    }
  return (
    <main className='form-main'>
        <h2 style={{textAlign:'center'}}>Login</h2>
        <form className='form-container' action="" onSubmit={handleSubmit}>
            <input name='Email' type="email" placeholder='email' required />
            <input name='Password' type="Password" placeholder='Password' required />
            <button type='submit'>Login</button>
        </form>
    </main>
  )
}

export default Login
