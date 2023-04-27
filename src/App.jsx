import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Header, Body, Button, About, CTA, Footer, HowItWorks, SuccessStories, Testimonials } from './components';
// import Navbar from './components/Navbar';
import './styles.css';
import styles from './style'


const App = () => (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
        
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <About />
            <HowItWorks />
            <SuccessStories />
            <Testimonials />
            <Footer />
          </div>
        </div>
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

export default App;
