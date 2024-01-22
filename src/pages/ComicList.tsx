import React, { useEffect, useState } from 'react';
import ComicCard from '../components/ComicCard';
import fetchComics from '../utils/fetchComics';
import useMarvelApiKeys from '../hooks/useMarvelApiKeys';

interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const ComicList: React.FC = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [offset, setOffset] = useState(0);
  const { publicKey, privateKey } = useMarvelApiKeys();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comicsData = await fetchComics(publicKey, privateKey, offset);
        setComics((prevComics) => [...prevComics, ...comicsData]);
      } catch (error) {
        console.error('Erro ao buscar quadrinhos:', error);
      } 
    };   
      fetchData();    
  }, [publicKey, privateKey, offset]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
      const pageHeight = document.documentElement.offsetHeight;

      if (scrollPosition > 0.8 * pageHeight) {
        setOffset((prevOffset) => prevOffset + 20);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
};

export default ComicList;
