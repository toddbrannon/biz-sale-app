import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import './styles.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/listings" element={<Listings/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
