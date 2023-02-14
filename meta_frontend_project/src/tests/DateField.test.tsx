import { render, screen } from "@testing-library/react";
import { DateField } from "src/components";

test("Renders the Date field", () => {
  render(<DateField value={new Date("2023-01-31")} inputFormat="MM/YY" />);

  const dateField = screen.getByRole("textbox");

  expect(dateField).toBeInTheDocument();
  expect(dateField).toHaveValue("01/23");
});
