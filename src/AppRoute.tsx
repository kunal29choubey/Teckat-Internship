import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateStudent, HomePage, Student, StudentOutline, UpdateStudent } from './pages'
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import Test4 from './pages/Test4';
import Test5 from './pages/Test5';
import Test6 from './pages/Test6';
import Connect from './Connect';
import Testing from './Testing';
const AppRoute:React.FC= () => {
  return (
    <Routes>
      <Route path="test1" element={<Test1/>} />
      <Route path="test2" element={<Test2/>}/>
      <Route path="test3" element={<Test3/>}/>
      <Route path="test4" element={<Test4/>}/>
      <Route path="test5" element={<Test5/>}/>
      <Route path="test6" element={<Test6/>}/>
      <Route path="Connect" element={<Connect/>}/>
      <Route path="Testing" element={<Testing/>}/>



      
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