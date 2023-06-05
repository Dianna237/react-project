import React from 'react';
import Header from './component/header/Header'
import './App.css';
import Contact from './component/contact/Contact';
import Navbar from './component/navbar/Navbar';
const App = ()=> {
  return (
    <div>
      <Header />
      <Contact />
      <Navbar />
    </div>   
  );
}
export default App;
