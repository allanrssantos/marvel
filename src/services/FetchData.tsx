import axios from 'axios';
import CryptoJS from 'crypto-js';
import config from '../config/config';

const { BASE_URL } = config;

const generateHash = (ts: string, privateKey: string, publicKey: string): string => {
  const hashInput = `${ts}${privateKey}${publicKey}`;
  return CryptoJS.MD5(hashInput).toString();
};

const fetchDatas = async (publicKey: string, privateKey: string, offset: number, route: string, search?: string) => {
  const timestamp = new Date().getTime().toString();
  const hash = generateHash(timestamp, privateKey, publicKey);

  const url = `${BASE_URL}/${route}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}&${search || ''}`;

  try {
    const response = await axios.get(url);
    return response.data.data.results;
  } catch (error) {
    console.error(`Erro ao buscar dados para rota ${route}:`, error);
    return [];
  }
};

export default fetchDatas;
