import React from 'react'
import { auth } from './firbase';
import './home.css';
import Carousel from './carousel';
import HomeProducts from './HomeProducts';


function Home({presentuser}) {
  
  const handleLogout =async()=>{
    await auth.signOut();
    
  }
 
  return (
    
    <div >
      
      <div>
          <div className='Header'>
               <div ><h1 className='Logo'>E-shOpPI <i class="fa-solid fa-align-left"></i></h1></div>
               <div>
                 <ul>
                   <li>
                    <p>cart</p>
                   </li>
                 </ul>
               </div>
               <div>
                    <p>Welcome to {presentuser.email}</p>
                    
                </div>
                <div>
                <button onClick={handleLogout}><i class="fa-regular fa-circle-left"></i></button>
                </div>

          </div>
      </div>
          
          <Carousel/>
           <HomeProducts/>
    </div>
  )
}

export default Home;