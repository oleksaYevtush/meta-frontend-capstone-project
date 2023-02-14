import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Displayer } from "src/components";
import { StateContextProvider } from "src/contexts";
import { DateIcon } from "src/components/icons";

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StateContextProvider>{children}</StateContextProvider>;
};

const displayerProps = {
  error: false,
  value: "Jan, 10",
  extraValue: "Select Date",
  icon: <DateIcon primary="black" secondary="yellow" />,
};

test("Renders the displayer", () => {
  render(<Displayer {...displayerProps} />, { wrapper });

  const displayer = screen.getByText("Jan, 10");

  expect(displayer).toBeInTheDocument();
});
