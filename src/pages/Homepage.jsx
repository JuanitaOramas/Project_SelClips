import React from 'react';
import Clips from '../components/Clips';
import './css/Homepage.css';

function HomePage() {
  return (
    <div>
      <select className="form-select custom-select" aria-label="Default select example">
        <option selected>Categories</option>
        <option className="health" >Health</option>
        <option>food</option>
        <option className = ""value="3">Medicine</option>
      </select><br/>
      
      <Clips />
    </div>

  );
}

export default HomePage;
