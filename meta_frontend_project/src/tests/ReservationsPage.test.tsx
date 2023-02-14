import * as React from "react";
import { render, screen } from "@testing-library/react";
import { StateContextProvider } from "src/contexts";
import { ReservationsPage } from "src/pages";

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StateContextProvider>{children}</StateContextProvider>;
};

test("Renders the page's header", () => {
  render(<ReservationsPage />, { wrapper });

  const headerElement = screen.getByText("Reservations");

  expect(headerElement).toBeInTheDocument();
});
