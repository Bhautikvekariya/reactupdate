import { render, screen } from "@testing-library/react";
import Greetinga from "./Greetinga";

// Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: "john" }),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("fetches and displays user name", async () => {
  render(<Greetinga />);
  const greetingElement = await screen.findByText(/hello, john/i);
  expect(greetingElement).toBeInTheDocument();
});
