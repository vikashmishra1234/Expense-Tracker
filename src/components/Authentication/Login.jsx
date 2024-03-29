import React, { useContext } from 'react'
import { userLogin } from '../Api';
import { useNavigate } from 'react-router-dom';
import ContextProvider from '../context/ContextProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const Navigate = useNavigate()
    const {setUser,setLoader,Loader} = useContext(ContextProvider);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        let form = e.target
        let formData = new FormData(form)
        let formObj = Object.fromEntries(formData.entries());
        setLoader(true)
        let res = await userLogin(formObj);
        setLoader(false)
        if(res.success){
            localStorage.setItem("userId",res.user._id) 
            setUser(res)
            localStorage.setItem("token",res.token);
            Swal.fire({
                text:res.message,
                icon:'success',
                
              })
            Navigate('/dashboard');
          

        }
        else{
            Swal.fire({
                text:res.error,
                icon:'error',
              
              })
        }
    }
  return (
    <main className='form-main'>
        <h2 style={{textAlign:'center'}}>Login</h2>
        <form className='form-container' action="" onSubmit={handleSubmit}>
            <input name='Email' type="email" placeholder='email' required />
            <input name='Password' type="Password" placeholder='Password' required />
            <button type='submit'>{Loader?'Please wait...':'Login'}</button>
        </form>
    </main>
  )
}

export default Login
