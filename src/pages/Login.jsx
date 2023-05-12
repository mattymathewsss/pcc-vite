import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const Login = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate('/');
      return clearTimeout();
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      const newArray = [...prev];
      const index = newArray.findIndex((item) => item.name === name);
      if (index >= 0) {
        newArray[index] = { name, value };
      } else {
        newArray.push({ name, value });
      }
      return newArray;
    });
  };

  const inputs = [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      placeholder: 'Enter Username',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Enter Password',
    },
  ];

  return (
    <div>
      <Form
        changeHandler={handleChange}
        submitHandler={handleFormSubmit}
        inputs={inputs}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Login;
