import React from "react";
import { StyledHomePage } from "../styles/HomePageStyles";
import KeyForm from "../components/KeyForm";

const HomePage: React.FC = () => {
  return (
      <StyledHomePage>
        <KeyForm />
      </StyledHomePage>
  );
};

export default HomePage;
