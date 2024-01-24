import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  border: 3px solid #007bff;
  border-radius: 20px;
  padding: 8px;
  width: 300px;
`;

interface SearchFieldProps {
  onSearch: (searchTerm: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <SearchContainer>
      <SearchInput
        id="search"
        name="search"
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default SearchField;
