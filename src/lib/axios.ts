import axios from 'axios';

export const stockApi = axios.create({
    baseURL: 'https://finnhub.io/api/v1/',
    headers: {'X-Finnhub-Token': process.env.EXPO_PUBLIC_STOCK_API}
  });