
import './App.css';
import Home from './ShoppingFile/Home';
import Auth from './ShoppingFile/Auth';
import './CSS/Header.css';
// import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth, } from './ShoppingFile/firbase';
import { Route,    Routes } from 'react-router-dom';
import HomeProducts from './ShoppingFile/HomeProducts';

function App() {
  const [presentuser,setPresentuser]=useState(null)
  useEffect(()=>{
      
     auth.onAuthStateChanged(user=>{
       if(user){ 
      setPresentuser({
        uid:user.uid,
        email:user.email
      });
       }else{
        setPresentuser(null)
       }
     })
    
  });
  
  return (
    <div >
        <div>
        
       
               {presentuser ? <Home presentuser={presentuser} /> :<Auth />}
             
                  <Routes>
                   
                       <Route path='/homeproducts/:id' element={<HomeProducts/>}/>
          
                   </Routes> 
              
          
        </div>
    </div>
  );
}

export default App;
