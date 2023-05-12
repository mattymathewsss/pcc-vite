import React, { useState } from 'react';
import Form from '../components/Form';

const Login = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);

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
      {isLoading ? 'Loading.....' : null}

      {isVisible && (
        <div style={{ textAlign: 'center' }}>
          {details.map((detail) => (
            <p>
              <span>
                <b>{detail.name}</b>
              </span>
              &nbsp;
              {detail.value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Login;
