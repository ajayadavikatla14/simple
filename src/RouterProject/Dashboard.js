import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
    let params =useParams();
    return (
        <>
            <h2>you are now in dashboard page</h2>
            <p>name : {params.name} </p>
            <Link to='/' className='link_style' >Back to Home </Link>
        </>
      )
}

export default Dashboard
