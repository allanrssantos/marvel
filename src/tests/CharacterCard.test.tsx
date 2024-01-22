import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterCard from "../components/CharacterCard";

const character = {
  id: 1,
  name: "Iron Man",
  thumbnail: {
    path: "path",
    extension: "jpg",
  },
};

test("renders CharacterCard component correctly", () => {
  render(<CharacterCard character={character} />);

  const cardContainer = screen.getByTestId("character-card-container");
  expect(cardContainer).toBeInTheDocument();

  const characterImage = screen.getByAltText("Iron Man") as HTMLImageElement;
  expect(characterImage).toBeInTheDocument();
  expect(characterImage.src).toBe("http://localhost/path/portrait_uncanny.jpg");

  const characterName = screen.getByText("Iron Man");
  expect(characterName).toBeInTheDocument();

  expect(cardContainer).toHaveStyle({
    width: "314px",
    margin: "16px",
    padding: "16px",
    borderRadius: "8px",
    border: "1px solid #fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#007bff",
  });

  expect(characterImage).toHaveStyle({
    width: "100%",
    borderRadius: "4px",
  });

  expect(characterName).toHaveStyle({
    marginTop: "12px",
    fontSize: "18px",
    fontWeight: "bold",
  });
});
