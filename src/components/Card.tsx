import React from "react";
import {
  CardContainer,
  CardContainerWrapper,
  Image,
  Name,
} from "../styles/CardStyles";

interface CardProps {
  data: {
    id: number;
    name?: string;
    fullName?: string;
    title?: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  route?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ data, onClick }) => {
  const { title, fullName, name, thumbnail } = data;
  const imageUrl = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

  return (
    <CardContainerWrapper>
      <CardContainer data-testid="card-container" onClick={onClick}>
        <Image src={imageUrl} alt={name || title || fullName} />
        <Name>{name || title || fullName}</Name>
      </CardContainer>
    </CardContainerWrapper>
  );
};

export default Card;
