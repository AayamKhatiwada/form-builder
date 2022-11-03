import React from 'react'
import { Link } from 'react-router-dom'
import '../animation/animate.css'

const Homepage = () => {
  return (
    <div className='d-flex'>
      <div className='position-relative wrapper'>
        <div className="position-absolute showcase">
          <h1 className='text-center animate'>Create your free survey form</h1>
          <div className="text-center mt-5 animate3">
            <Link className='btn btn-primary d-inline btn-lg' to="/create-form">Get Started</Link>
          </div>
        </div>
      </div>
      <div className='position-relative wrapper'>
        <div className="position-absolute showcase">
          <img src='https://www.zohowebstatic.com/sites/default/files/forms/createformbuilder.png' width='100%' alt='Home' className='animate1'></img>
        </div>
      </div>
    </div>
  )
}

export default Homepage