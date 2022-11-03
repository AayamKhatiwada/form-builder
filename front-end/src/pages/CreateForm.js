import React from 'react'
import { Link } from 'react-router-dom'
import FormBuilder from '../components/FormBuilder'

const CreateForm = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/"> Form Builder</Link>
        </div>
      </nav>
      <FormBuilder />
    </>
  )
}

export default CreateForm