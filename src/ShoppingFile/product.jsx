import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function product() {

    const [item,setItem]=useState([]);
    const {id}=useParams()
    console.log(id);

    useEffect(()=>{
         getdata()
    },[])
    const getdata = async() =>{
        try{  
            let res = await fetch (`https://fakestoreapi.com/products/${id}`);
            console.log(res);
            
            
            let data= await res.json();
            setItem(data)
            }catch(error){
                console.error('Error fetching data:', error);
            }
            
    }
    
  return (
    <div>
        {
            Object.keys(item).length ? (<div>

                <div>
                    <div>
                         <img src={item.image} alt="" />
                    </div>
                </div>
            </div>) : (<div><h1>Load</h1></div>)
        }
    </div>
  )
}

export default product