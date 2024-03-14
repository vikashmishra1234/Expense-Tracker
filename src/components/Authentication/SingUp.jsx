import React, { useContext } from 'react'
import '../style/style.css'
import { signUp } from '../Api';
import { useNavigate ,Link} from 'react-router-dom';
import ContextProvider from '../context/ContextProvider';
import Swal from 'sweetalert2';

const SingUp = () => {

    const Navigate = useNavigate();
    const {setUser} = useContext(ContextProvider);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        let form = e.target
        let formData = new FormData(form)
        let formObj = Object.fromEntries(formData.entries());
        let res = await signUp(formObj);
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
    <h2 style={{textAlign:'center'}}>Sign Up</h2>
    <form action="" className='form-container' onSubmit={handleSubmit}>
        <input placeholder='your name' name='Name' type="text" required />
        <input placeholder='email' name='Email' type="email" required />
        <input placeholder='make password' name='Password' type="password" required/>
        <button  type='submit'>SignUP</button>
    </form>
    <div style={{textAlign:'center',marginTop:"20px"}}>

   <Link to ='/login'>Already have an account? Login</Link> 
    </div>
</main>
  )
}

export default SingUp
