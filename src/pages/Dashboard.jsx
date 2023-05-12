import React from 'react';
import Card from '../components/Card';
import MainContainer from '../containers/MainContainer';

const Dashboard = () => {
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
  return (
    <MainContainer>
      {animes.map((anime) => (
        <Card key={anime.title}>
          <h1>{anime.title}</h1>
          <h2>{anime.genre}</h2>
          <h2>{anime.author}</h2>
          <h3>{anime.isCensored ? 'Efas' : 'Nic3'}</h3>
        </Card>
      ))}
    </MainContainer>
  );
};

export default Dashboard;
