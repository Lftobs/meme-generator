import './App.css';
import { useState } from 'react';


function App() {
  const [darkm, setdarkm] = useState(true)
  return (
    <div className={darkm ? 'dark App': 'light App'}  >
        <button onClick={() => setdarkm(!darkm)} >change</button>
    </div>
    // <div className="App">
    // //   <header className="App-header">
    // //m     <img src={logo} className="App-logo" alt="logo" />
    // //     <p>
    // //       Hi, im tobs and i absolutely don't know what im doing next.
    // //     </p>
    // //     <a// 
    // //       className="App-link"
    // //       href="https://reactjs.org"
    // //       target="_blank"
    // //       rel="noopener noreferrer"
    // //     >
    // //       Learn React
    // //     </a>
    // //   </header>
    // //   <Random />
    // </div>
  );
}

export default App;
