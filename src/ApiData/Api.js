import React, { useState } from 'react'
import ApiBackPart from './ApiBackPart'

const Api = () => {
    const [data,setData]=useState(
        {
            name:'',
            age:''
        }
    )

    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(data);
        fetch('https://even-metrics-247408-default-rtdb.firebaseio.com/data.json',
        {
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                "Content-type": "application/json: charset=UTF-8"
            }
        }
        ).then(res=>alert('Data posted..hehe..'))
            .catch(err=>console.log(err))
    }


  return (
    <>
        <form onSubmit={submitHandler}>
            <label>Name:</label><br />
            <input type="text" name="name" onChange={changeHandler} /><br />
            <label>Age:</label><br />
            <input type="text" name="age" onChange={changeHandler} /><br />
            <label>Job:</label><br />
            <input type="text" name="job" onChange={changeHandler} /><br />
            <input type="submit" value="click to submit" />
            <ApiBackPart data={data}/>
        </form>
        
    </>
  )
}

export default Api