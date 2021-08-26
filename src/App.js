import './App.css';
import Counter from './components/Counter';
import UserState from './components/userState';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter(prevState => prevState + 1)
  }

  function handleDecrement() {
    setCounter(prevState => prevState - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar counter={counter} />
        <Counter 
        counter={counter} 
        handleIncrement={handleIncrement} 
        handleDecrement={handleDecrement} 
        />
        <br />
        <UserState />
      </header>
    </div>
  );
}

export default App;
