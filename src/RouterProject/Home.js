import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const About = () => {
  const user='Ram';
  const contact=12345;
  return (
    <>
        <h2>Welcome to Home Page</h2>
        <Link to={`/dashboard/${user}`} className='link_style'>Dashboard</Link>
        <Link to={`/about?contact=${contact}`} className='link_style'>About</Link>
    </>
  )
}

export default About