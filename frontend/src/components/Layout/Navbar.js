import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="App-header navbar">
        <Link to="/" className="nav-link">
          <span className="main-title">CRUD</span>
        </Link>

        <ul className="nav">
          <li>
            <Link to="/create-student" className="nav-link">
              Add Student
            </Link>
          </li>
          <li>
            <Link to="/student-list" className="nav-link">
              Student List
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
