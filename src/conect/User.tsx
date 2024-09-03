import axios from "axios"
import { useEffect, useState } from "react"

export const User=function(){

    const [message,setMessage]=useState('');
    useEffect(()=>{
        let token=sessionStorage.getItem('jwtToken')

        
axios.get("https://localhost:7121/api/user/admin",{

headers: {
    Authorization: `Bearer ${token}`
  }
}).then((res)=>{

    setMessage(res.data);
})

    },[])

    return<div>

        <h1>`${message} `</h1>
    </div>
}