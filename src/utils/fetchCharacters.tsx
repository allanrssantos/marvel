import axios from 'axios';
import CryptoJS from 'crypto-js';
import config from '../config/config';

const { BASE_URL } = config;

const generateHash = (ts: string, privateKey: string, publicKey: string): string => {
  const hashInput = `${ts}${privateKey}${publicKey}`;
  return CryptoJS.MD5(hashInput).toString();
};

const fetchCharacters = async (publicKey: string, privateKey: string, offset: number) => {
    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp, privateKey, publicKey);
  
    const url = `${BASE_URL}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}`;

  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data.data.results;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return [];
  }
};

export default fetchCharacters;