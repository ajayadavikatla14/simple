import React from 'react'
import './style.css'

const Edit = () => {
  return (
    <>  
        <div className="body">
            <div className="head">Edit Form</div>
            <form className='form_part'>
                <label>First Name:</label>
                <input type="text" name="fname" placeholder='First Name'/><br />
                <label>Last Name:</label>
                <input type="text" name="lname" placeholder='Last Name'/><br />
                <label>Email:</label>
                <input type="email" name="email" placeholder='Enter Email' className='inpt_margn'/><br />
                <button type="submit" className='btn' >Submit</button>
            </form>
        </div>
    </>
  )
}

export default Edit