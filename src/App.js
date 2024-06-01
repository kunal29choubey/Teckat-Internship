import logo from './logo.svg';
import './App.css';

function App() {
// const emp1 ={
//   name:"vishal"
// };
// const emp2= {
//   name:"vishal"
// }
// if (emp1.name=== emp2.name){
//   console.log("hello");}
//   else{
// console.log("world");
//   }
  
// const fun=()=>{
//   const num1 = 8;
//   const num2 = 2;
//   console.log(num1+num2);
// };
// if(emp1.name===emp2.name){
// fun();
// }

const arr1 = [1,2,3,4,5]
for (let item of arr1){
  console.log(item)
}




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
