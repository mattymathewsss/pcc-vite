import React, { useState } from 'react';
import Button from '../Button';
import './styles.scss';

const Navbar = ({ logo }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [string, setString] = useState('string');

  const handleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const handleString = () => {
    setString('Changed String');
  };

  return (
    <nav className="navbar">
      <h3>{logo}</h3>
      <Button handler={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</Button>
      <Button handler={handleString}>{string}</Button>
    </nav>
  );
};

export default Navbar;
