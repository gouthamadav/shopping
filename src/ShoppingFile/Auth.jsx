import React, { useState } from 'react';
import './Auth.css';
import {auth} from './firbase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';



function Auth() {

    const [email ,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName]=useState('')
    
    // let navigate =useNavigate()
   
   
    const signIn = async (e) =>{
         e.preventDefault()
         await signInWithEmailAndPassword (auth,email,password);
         const user =auth.currentUser;
         console.log(user)
         setEmail('')
         setPassword('')
        
         
         
    }
    const signUp = async (e) =>{
        e.preventDefault();
        await createUserWithEmailAndPassword(auth,email,password);
        const user =auth.currentUser;
        console.log(user)
        
        
       
        
      
         
    }

    const submitHandler = async(e) =>{
        e.preventDefault()
       
        if(e.email===""&& e.password===""){
            alert('please enter your credentials')
        }
        
       
       
    }
   
    
  return (
    <div >
        <h1 className='head'><span className='sp'>E-ShoPPi <i class="fa-solid fa-cart-shopping"></i></span></h1>
        <div className='hero'>

            <div>
                <img className='e-img' src="https://img.freepik.com/free-vector/no-time-concept-illustration_114360-4290.jpg?t=st=1733892077~exp=1733895677~hmac=9780b39b24d51eeb5535974611dd9603b8f1fd1ee4f459341b233d4a50d92215&w=740" alt="" />
            </div>
            <div className='form'>
                
                    <form onSubmit={submitHandler}>
                                     <input type="text" className='name' value={name} required onChange={(e)=>{setName(e.target.value)}}/> <br />
                                     <input type="text"  className='email' value={email} required onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
                                     <input type="text" value={password} className='password' required onChange={(e)=>setPassword(e.target.value)}/> <br/>
                                     <button onClick={signIn} className='btnone'>SignIn</button> &nbsp;&nbsp;
                                     <button onClick={signUp} className='btntwo'>SignUp</button>
                    </form>
               
            </div>
        </div>
    </div>
  )
}

export default Auth