import React from "react";
import { render, screen } from "@testing-library/react";
import CreatorCard from "../components/CreatorCard";

const creator = {
  id: 1,
  fullName: "John Doe",
  thumbnail: {
    path: "path",
    extension: "jpg",
  },
};

test("renders CreatorCard component with correct image and name", () => {

  render(<CreatorCard creator={creator} />);

  const creatorImage = screen.getByAltText("John Doe") as HTMLImageElement;
  const creatorFullName = screen.getByText("John Doe");
  
  expect(creatorImage.src).toContain("path/portrait_uncanny.jpg");
  expect(creatorFullName).toBeInTheDocument();
});

test("renders CreatorCard component with correct styles", () => {
  
  render(<CreatorCard creator={creator} />);

  const cardContainer = screen.getByTestId("creator-card-container");
  const creatorImage = screen.getByAltText("John Doe") as HTMLImageElement;
  const creatorFullName = screen.getByText("John Doe");

  expect(cardContainer).toHaveStyle({
    width: "314px",
    margin: "16px",
    padding: "16px",
    borderRadius: "8px",
  });

  expect(creatorImage).toHaveStyle({
    width: "100%",
    borderRadius: "4px",
  });


  expect(creatorFullName).toHaveStyle({
    marginTop: "12px",
    fontSize: "18px",
    fontWeight: "bold",
  });
});
