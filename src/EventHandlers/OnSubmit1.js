import React, { useState } from 'react'

const OnSubmit1 = () => {
    const [data,setData]=useState({
        email:'',
        password:''
    })

    const changehandler= (e)=>{
        setData({ ...data,[e.target.name]:e.target.value })
    }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        if(data.password.length<5){
            alert('pwd length should atleast 8 chars..')
        }
        else{
            console.log(data);
        }
    }

  return (
    <>
        <form onSubmit={ submitHandler }>
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" onChange={ changehandler } /><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" onChange={ changehandler } /><br />
            <input type="submit" value="Login" />
        </form>
    </>
  )
}

export default OnSubmit1