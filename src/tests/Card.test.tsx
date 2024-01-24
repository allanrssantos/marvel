import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

const data = {
  id: 1,
  name: "Iron Man",
  thumbnail: {
    path: "path",
    extension: "jpg",
  },
};

test("renders CharacterCard component correctly", () => {
  render(<Card data={data} />);

  const cardContainer = screen.getByTestId("card-container");
  expect(cardContainer).toBeInTheDocument();

  const dataImage = screen.getByAltText("Iron Man") as HTMLImageElement;
  expect(dataImage).toBeInTheDocument();
  expect(dataImage.src).toBe("http://localhost/path/portrait_uncanny.jpg");

  const dataName = screen.getByText("Iron Man");
  expect(dataName).toBeInTheDocument();

  expect(cardContainer).toHaveStyle({
    width: "314px",
    margin: "16px",
    padding: "16px",
    border: "1px solid #fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#007bff",
    cursor: 'pointer',
  });

  expect(dataImage).toHaveStyle({
    width: "100%",
    borderRadius: "4px",
  });

  expect(dataName).toHaveStyle({
    marginTop: "12px",
    fontSize: "18px",
    fontWeight: "bold",
  });
});
