import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateStudent, HomePage, Student, StudentOutline, UpdateStudent } from './pages'

const AppRoute:React.FC= () => {
  return (
    <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="student" element={<StudentOutline/>}>
        <Route path="" element={<Student />}/>
        <Route path="Create-Student" element={<CreateStudent />}/>
        <Route path="Update-Student/:StudentID" element={<UpdateStudent />}/>
        </Route>
    </Routes>
    
  );
};

export default AppRoute