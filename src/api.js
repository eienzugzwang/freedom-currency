import axios from 'axios';

const BASE_URL = 'http://213.173.110.202:22061'; // Your backend URL

const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const register = (data) => api.post('/register', data);
export const login = (data) => api.post('/login', data);
export const getWallet = () => api.get('/wallet');
export const transfer = (data) => api.post('/transfer', data);
export const computeScore = (data) => api.post('/score', data);
export const getLeaderboard = () => api.get('/leaderboard');