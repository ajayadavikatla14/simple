import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useLocation } from 'react-router-dom'

const About = () => {
  let {search}= useLocation();
  let params=new URLSearchParams(search);
  return (
    <>
        <h2>here you are in About page</h2>
        <Link to='/' className='link_style' >Back to Home </Link>
        <p>contact: {params.get('contact')}</p>
    </>
  )
}

export default About