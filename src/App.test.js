import { render, screen } from "@testing-library/react";
import App from "./App";

test("Contain de dog ", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent(/🐶/);
});

test("Run Click ", () => {
  render(<App />);

  expect(screen.getByRole("button", { click: "searchByBreed" })).toBeDisabled();
});

test("Same name ", () => {
  render(<App />);

  expect(screen.getByRole("button", { name: "Search" })).toBeDefined();
});
