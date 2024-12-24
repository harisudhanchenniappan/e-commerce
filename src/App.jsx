import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Cart from './components/Cart';
import './App.css';
import BuyNow from './pages/BuyNow';
import YourOrders from './pages/YourOrders';
import LoginSignupPage from './pages/LoginSignupPage';
import WelcomePage from './pages/WelcomePage';
import All from './components/All';

function App() {
  return (
    <div>
      <All />
    </div>
  );
}

export default App;
