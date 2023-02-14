import { updateTimes } from "src/store/reducers";

test("Update times", () => {
  const times = updateTimes(undefined);
  expect(times.length).toBeGreaterThan(0);
});
