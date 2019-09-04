import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://localhost:3333/v1',
});

export const safeRequest = axios.create({
  baseURL: 'http://localhost:3333/v1',
  headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
});
