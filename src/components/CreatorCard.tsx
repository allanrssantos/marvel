import React from "react";
import styled from "styled-components";

interface CreatorCardProps {
  creator: {
    id: number;
    fullName: string;
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

const CreatorImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const CreatorFullName = styled.h3`
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;

const CardContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CreatorCard: React.FC<CreatorCardProps> = ({ creator }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, fullName, thumbnail } = creator;
  const imageUrl = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

  return (
    <CardContainerWrapper>
      <CardContainer data-testid="creator-card-container">
        <CreatorImage src={imageUrl} alt={fullName} />
        <CreatorFullName>{fullName}</CreatorFullName>
      </CardContainer>
    </CardContainerWrapper>
  );
};

export default CreatorCard;
