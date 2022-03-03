import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebaseDB from '../firebase'
import './style.css'

const Register = () => {
    const [data,setData]=useState({
        firstname:"",
        lastname:"",
        email:"",
    })

    const {firstname,lastname,email}=data

   const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

   const submitHandler=(event)=>{
        event.preventDefault();
        console.log(data);
        firebaseDB.child('register').push(
            data,
            err =>{
                console.log(err);
            }
        )
    }

  return (
    <>  
        <div className="body">
            <div className="head">Registration Form</div>
            <form className='form_part' onSubmit={submitHandler}>
                <label>First Name:</label>
                <input type="text" name="firstname" placeholder='First Name' value={firstname}  onChange={changeHandler}  /><br />
                <label>Last Name:</label>
                <input type="text" name="lastname" placeholder='Last Name' value={lastname} onChange={changeHandler} /><br />
                <label>Email:</label>
                <input type="email" name="email" placeholder='Enter Email' value={email} className='inpt_margn'  onChange={changeHandler}/><br />
                <button type="submit" className='btn' >Submit</button>
            </form>
            
            <div className="box">
                <div>FirstName : </div>
                <div>LastName :  </div>
                <div>Email : </div>
                
               <Link to='/edit'><button value="update" className='box_btn update'>Update</button></Link> 
                <button value="update" className='box_btn delete'>Delete</button>
            </div>
            
        </div>
    </>
  )
}

export default Register