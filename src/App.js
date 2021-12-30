import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
    <header className="App-header">
        <nav>
         <Link to="/">home</Link>
        </nav>
      </header>
      <NavBar/>
    </div>
  );
}
export default App;
