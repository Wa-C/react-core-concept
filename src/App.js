import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name = "wassi"></Person>
        <Person name = "abeed"></Person>
        <Counter></Counter>
        
      </header>
    </div>
  );
}

function Person (props) {
  const style = {
    border: '2px solid red',
    margin : '5px'
  }
  return (
  <div style = {style} >
  <h1> Name :{props.name}</h1>
  <h1> Name :{props.name}</h1>
  </div>
    ) 
}

function Counter() {
  const [count, setCount] = useState(0)
  const handleDecrease = () => {
    if (count > 0) {
      setCount (count - 1)
    }
    else {
      console.log("alert");
    }
  } ;

  
  const handleIncrease = () => {
    setCount(count + 1);
  };

  return ( <div>
    <h1> Count :{count}</h1>
    <button onClick = {handleIncrease}>Increase</button>
    <button onClick = {handleDecrease}>Decrease</button>

  </div> )


}

export default App;
