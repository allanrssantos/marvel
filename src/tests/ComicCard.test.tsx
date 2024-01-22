import React from "react";
import { render, screen } from "@testing-library/react";
import ComicCard from "../components/ComicCard";
import '@testing-library/jest-dom';

const comic = {
  id: 1,
  title: "Amazing Spider-Man",
  thumbnail: {
    path: "path",
    extension: "jpg",
  },
};

test("renders ComicCard component correctly", () => {
  render(<ComicCard comic={comic} />);

  const cardContainer = screen.getByTestId("comic-card-container");
  expect(cardContainer).toBeInTheDocument();

  const comicImage = screen.getByAltText("Amazing Spider-Man") as HTMLImageElement;
  expect(comicImage).toBeInTheDocument();
  expect(comicImage.src).toBe("http://localhost/path/portrait_uncanny.jpg");

  const comicTitle = screen.getByText("Amazing Spider-Man");
  expect(comicTitle).toBeInTheDocument();

  expect(cardContainer).toHaveStyle({
    width: "314px",
    margin: "16px",
    padding: "16px",
    borderRadius: "8px",
    border: "1px solid #fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#e60000",
  });

  expect(comicImage).toHaveStyle({
    width: "100%",
    borderRadius: "4px",
  });

  expect(comicTitle).toHaveStyle({
    marginTop: "12px",
    fontSize: "18px",
    fontWeight: "bold",
  });
});
