import React from 'react';
import { Link } from "react-router-dom";
import './HomePage.css';
const HomePage = () => {
    return (
        <div className="home-container">
        <h1 className="home-title">Welcome to ToothFixers</h1>
        <nav className="home-nav">
          <Link to={"/view"} className="nav-link">View all patients</Link>
          <Link to={"/viewrecords"} className="nav-link">View all records</Link>
        </nav>
      </div>
    );
}
export default HomePage;