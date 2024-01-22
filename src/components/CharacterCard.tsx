import React from 'react';
import styled from 'styled-components';

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
}

const CardContainer = styled.div`
  width: 314px;
  margin: 16px;
  padding: 16px;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #007bff;
`;

const CharacterImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const CharacterName = styled.h3`
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;

const CardContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { name, thumbnail } = character;
  const imageUrl = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

  return (
    <CardContainerWrapper>
      <CardContainer data-testid="character-card-container">
        <CharacterImage src={imageUrl} alt={name} />
        <CharacterName>{name}</CharacterName>
      </CardContainer>
    </CardContainerWrapper>
  );
};

export default CharacterCard;
