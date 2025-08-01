import React from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {

  const [count,setCount] = React.useState(0);

  const handelIncrement = () => {
    setCount(count + 1);
    console.log("Incremented count:", count + 1);
  };

  const handelDecrement = () => {
    setCount(count - 1);
    console.log("Decremented count:", count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = () => {
      alert("I was clicked");
  };

  return (

    <div className='App'>

        <h2>Counter : {count}</h2>
        <div className='btnContainer'>
          <button onClick={handelIncrement}>Increment</button> &nbsp;
          <button onClick={handelDecrement}>Decrement</button> &nbsp;
          
          <button onClick={() => sayWelcome("Welcome to eventexamplesapp")}>Say Welcome</button>&nbsp;

          <button onClick={handleSyntheticEvent}>Click Me</button>
        </div>
        
        <CurrencyConvertor />
    </div>
    
  );
};

export default App;