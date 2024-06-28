import React from 'react'
import { Link } from 'react-router-dom'

const Test4 = () => {
  return (
    <>
  <button title="CreateStudent" className="create_button">
        <Link to="/student/create-student">Create student</Link>
      </button>

    </>
  )
}

export default Test4