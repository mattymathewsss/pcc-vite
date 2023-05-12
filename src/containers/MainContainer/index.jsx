import React from 'react';
import Navbar from '../../components/Navbar';
import './styles.scss';

const MainContainer = ({ children }) => {
  return (
    <div className="main">
      <Navbar loginText="Click here" logo="My Website" />
      {children}
    </div>
  );
};

export default MainContainer;
