import { useCookies } from 'react-cookie';

const useMarvelApiKeys = () => {
  const [cookies] = useCookies(['public', 'private']);

  const publicKey = cookies.public || '';
  const privateKey = cookies.private || '';

  return { publicKey, privateKey };
};

export default useMarvelApiKeys;