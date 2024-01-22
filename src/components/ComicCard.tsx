import React from "react";
import styled from "styled-components";

interface ComicCardProps {
  comic: {
    id: number;
    title: string;
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
  background-color: #e60000;
`;

const ComicImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const ComicTitle = styled.h3`
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;

const CardContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, title, thumbnail } = comic;
  const imageUrl = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

  return (
    <CardContainerWrapper>
      <CardContainer>
        <ComicImage src={imageUrl} alt={title} />
        <ComicTitle>{title}</ComicTitle>
      </CardContainer>
    </CardContainerWrapper>
  );
};

export default ComicCard;
