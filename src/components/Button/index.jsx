import React from 'react';
import './styles.scss';

const Button = ({ children, handler, type, isLoading }) => {
  return (
    <button type={type} onClick={handler} disabled={isLoading}>
      {children}
    </button>
  );
};

export default Button;
