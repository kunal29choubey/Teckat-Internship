import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState<string>(); //usestate it means to change the bata

  useEffect(() => {
    setData("world");
  }, []);
  return (
    <>
      <div>{data}</div>
      </>
  );       
}

export default App
