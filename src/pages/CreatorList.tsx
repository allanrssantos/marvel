import React, { useEffect, useState } from "react";
import CreatorCard from "../components/CreatorCard";
import fetchCreators from "../utils/fetchCreators";
import useMarvelApiKeys from "../hooks/useMarvelApiKeys";

interface Creator {
  id: number;
  fullName: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const CreatorList: React.FC = () => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [offset, setOffset] = useState(0);
  const { publicKey, privateKey } = useMarvelApiKeys();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creatorsData = await fetchCreators(publicKey, privateKey, offset);
        setCreators((prevCreators) => [...prevCreators, ...creatorsData]);
      } catch (error) {
        console.error("Erro ao buscar criadores:", error);
      }
    };
    fetchData();
  }, [publicKey, privateKey, offset]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const pageHeight = document.documentElement.offsetHeight;

      if (scrollPosition > 0.8 * pageHeight) {
        setOffset((prevOffset) => prevOffset + 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
};

export default CreatorList;
