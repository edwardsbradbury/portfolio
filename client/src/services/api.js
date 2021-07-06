import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gitconnected.com/v1/portfolio/edwardsbradbury',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;