import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './styles.scss';

const Navbar = ({ logo }) => {
  return (
    <nav className="navbar">
      <h3>{logo}</h3>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">
              <Button>Logout</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
