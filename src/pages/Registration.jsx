import React, { useState } from 'react';
import Form from '../components/Form';
import MainContainer from '../containers/MainContainer';

const Registration = () => {
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
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      placeholder: 'Please enter your First name',
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      placeholder: 'Please enter your Last name',
    },
    {
      label: 'Address',
      name: 'address',
      type: 'text',
      placeholder: 'Street, City',
    },
    {
      label: 'Bio',
      name: 'bio',
      type: 'text',
      placeholder: 'Something about yourself',
    },
  ];

  return (
    <MainContainer>
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
    </MainContainer>
  );
};

export default Registration;
