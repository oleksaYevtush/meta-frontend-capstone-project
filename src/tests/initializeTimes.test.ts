import { initializeTimes } from "src/store/reducers";

test("Initializes times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});
