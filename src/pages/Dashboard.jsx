import React, { useEffect, useState } from 'react';
import { getComments } from '../api/api';
import Card from '../components/Card';
import MainContainer from '../containers/MainContainer';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const { data, status } = await getComments(page);
        setPosts(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchPosts();
  }, [page]);

  const button1Handler = () => {
    setPage(1);
  };

  const button2Handler = () => {
    setPage(2);
  };

  return (
    <MainContainer>
      <button onClick={button1Handler}>set page to 1</button>
      <button onClick={button2Handler}>set page to 2</button>
      {posts.map((post) => (
        <Card key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </Card>
      ))}
    </MainContainer>
  );
};

export default Dashboard;
