import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ConfirmationButton } from "src/components";
import { BookingFormContextProvider, StateContextProvider } from "src/contexts";

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StateContextProvider>
      <BookingFormContextProvider>{children}</BookingFormContextProvider>
    </StateContextProvider>
  );
};

describe("Test the confirmation button", () => {
  it("Renders the button", () => {
    render(<ConfirmationButton />, { wrapper });
    const reserveButton = screen.getByRole("button");

    expect(reserveButton).toBeInTheDocument();
  });

  it("Shows the default label", () => {
    render(<ConfirmationButton />, { wrapper });
    const labelButton = screen.getByText("Reserve a Table");

    expect(labelButton).toBeTruthy();
  });
});
