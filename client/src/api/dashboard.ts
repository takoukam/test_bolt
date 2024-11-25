import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const getDashboardStats = async () => {
  const { data } = await axios.get(`${API_URL}/dashboard/stats`);
  return data;
};

export const getOperatorBalance = async () => {
  const { data } = await axios.get(`${API_URL}/dashboard/balance`);
  return data;
};