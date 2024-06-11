import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<number>(0);
  const[numberData, setNumberData] = useState<number>(0) ;//usestate it means to change the bata

  useEffect(() => { addData();}, [numberData]);
  const addData = ()=>{
const oldData = data;
const newData = oldData + 1;
setData(newData);
console.log(newData);

  //   setData("world");
  };
  const decrementData = () => {
    setNumberData(numberData - 1);
  };
  return (
    <>
    <button title="title" onClick={addData} className={'number ${data}'}> add Data</button>

      <div>incremented Data: {data}</div>
      <br />
      <button onClick = {decrementData} className={'decrement ${data}'}> decrement</button>
      <div>decrementData: {numberData}</div>
      </>
  );       
}

export default App
