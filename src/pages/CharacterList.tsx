import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import fetchCharacters from '../utils/fetchCharacters';
import useMarvelApiKeys from '../hooks/useMarvelApiKeys';

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [offset, setOffset] = useState(0);
  const { publicKey, privateKey } = useMarvelApiKeys();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await fetchCharacters(publicKey, privateKey, offset);
        setCharacters((prevCharacters) => [...prevCharacters, ...charactersData]);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
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
  }, [characters]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#e60000', marginTop: '10px' }}>Personagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
