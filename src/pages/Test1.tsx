import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form';

const Test1 = () => {
const[val,setVal]= useState(0);
useEffect(() =>{
    console.log("value changed");
    
},[val])
  return (
    <>
    <h1>Inccrement</h1>
    <button onClick={() =>
        setVal(val + 1)
    }> Click{val}
    </button>
    </>
  )
}

export default Test1