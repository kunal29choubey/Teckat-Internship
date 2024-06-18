import React from 'react'
import { Link } from 'react-router-dom'

const Student:React.FC = () => {
  return (
  <button title="students"> 
  <Link to="/student/create-student">Create student</Link>
  </button>
  )
}

export default Student
