
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', // backend URL
  withCredentials: true // crucial to send cookies
});

export default axiosInstance;
