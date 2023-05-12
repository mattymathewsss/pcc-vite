import axios from 'axios';

const endpoint = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const getPosts = () => endpoint.get('/posts');

export const getComments = (postId) =>
  endpoint.get(`/comments?postId=${postId}`);
