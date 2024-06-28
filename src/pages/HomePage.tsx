
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import React from 'react'




const HomePage=()=>{
  
  const [data, setData] = useState<number> (0);
  const[numberData, setNumberData] = useState<number>(0);
  
 const numberArray = [1,2,3,4,5,6,7,7];
const people =[
  {name:"vishal", age:20},
  {name:"sunil", age:21},
  {name:"rahul", age: 22}
]

  useEffect(() =>{
    //fix: added a function to be executed when the effect is triggered
    console.log('Effect triggered');
    
  }, [numberData]);/*{ addData();}, [numberData]);*/
  const addData = ()=>{
const oldData = data;
const newData = oldData + 1;
setData(newData);
console.log(newData);

    
  };
  const decrementData = () => {
    setNumberData(numberData - 1);
  };
  return (
    <>

    <button title="student"> 
      <Link to="/student">Student Details</Link>
    </button>

<br />
<br />
    <button title="title" onClick={addData} className={'number ${data}'}> add Data</button>

      <div>incremented Data: {data}</div>
      <br />
      <button onClick = {decrementData} className={'decrement ${data}'}> decrement</button>
      <div>decrementData: {numberData}</div>

//       {numberArray.map((item, i) => {
        return <div key={i}>{item}</div>;
      })}

      {people.map((item, i) => {
        return (
          <div key={i}>
            {item.name === "vishal" ? (
              <>
//                 <div>name: {item.name}</div>
//                 <div>Age: {item.age}</div> {/* Fix: capitalized 'Age' */}
//                 <br />
//               </>
            ) : (
              <>
                <div>
                  inactive
                </div>
                <br />
              </>
            )}
            </div>
        );
      })}
    </>
  );

}


  



export default HomePage

