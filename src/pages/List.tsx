import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useMarvelApiKeys from "../hooks/useMarvelApiKeys";
import fetchDatas from "../services/FetchData";
import LoadingIndicator from "../components/LoadingIndicator";
import Modal from "../components/Modal";
import SearchField from "../components/SearchField";

interface ListProps {
  route: string;
}

const DataList: React.FC<ListProps> = ({ route }) => {
  const [datas, setDatas] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);
  const { publicKey, privateKey } = useMarvelApiKeys();
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const listData = await fetchDatas(publicKey, privateKey, offset, route);
        setDatas((prevDatas) => [...prevDatas, ...listData]);
        setLoading(false);
      } catch (error) {
        console.error(`Erro ao buscar ${route}:`, error);
        setLoading(false);
      }
    };

    fetchData();
  }, [publicKey, privateKey, offset, route, searchTerm, setDatas]);

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
  }, [datas]);

  const handleCardClick = (data: any) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSearch = async (searchTerm: string) => {
    setDatas([]);
    setOffset(0);
    setNoResults(false);

    try {
      setLoading(true);
      const searchField = getSearchField(route);
      const searchData = await fetchDatas(
        publicKey,
        privateKey,
        offset,
        route,
        `${searchField}=${searchTerm}`
      );
      if (searchData.length === 0) {
        setNoResults(true);
      } else {
        setDatas(searchData);
      }
      if (!searchTerm && searchData.length === 0) {
        try {
          setLoading(true);
          const listData = await fetchDatas(
            publicKey,
            privateKey,
            offset,
            route
          );
          setDatas((prevDatas) => [...prevDatas, ...listData]);
          setNoResults(false);
        } catch (error) {
          console.error(`Erro ao buscar ${route}:`, error);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error(`Erro ao buscar ${route}:`, error);
      setLoading(false);
    }
  };

  const getSearchField = (route: string): string => {
    switch (route) {
      case "characters":
        return "nameStartsWith";
      case "comics":
        return "titleStartsWith";
      case "creators":
        return "nameStartsWith";
      default:
        return "nameStartsWith";
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <SearchField onSearch={handleSearch} />
      {loading && <LoadingIndicator />}
      {noResults && (
        <div
          style={{ marginTop: "20px", fontWeight: "bold", color: "#ff0000" }}
        >
          Nenhum resultado encontrado.
        </div>
      )}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {datas.map((data) => (
          <Card
            key={data.id}
            data={data}
            route={route}
            onClick={() => handleCardClick(data)}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        data={selectedData}
      />
    </div>
  );
};

export default DataList;
