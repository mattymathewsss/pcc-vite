import { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Navbar from './components/Navbar';

const App = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let value = true;

  const animes = [
    {
      title: 'One Piece',
      genre: 'adventure',
      author: 'E. Oda',
      isCensored: true,
    },
    {
      title: 'Bleach',
      genre: 'fantasy',
      author: 'K. Tite',
      isCensored: true,
    },
    {
      title: 'Naruto',
      genre: 'adventure',
      author: 'M. Kishimoto',
      isCensored: false,
    },
  ];

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

  return (
    <div>
      <Navbar loginText="Click here" logo="My Website" />
      {value ? 'Hello World' : 'Goodbye World'}
      {animes.map((anime) => (
        <Card key={anime.title}>
          <h1>{anime.title}</h1>
          <h2>{anime.genre}</h2>
          <h2>{anime.author}</h2>
          <h3>{anime.isCensored ? 'Efas' : 'Nic3'}</h3>
        </Card>
      ))}
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

export default App;
