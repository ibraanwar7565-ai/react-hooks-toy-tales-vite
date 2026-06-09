import { test } from "vitest";

test("Test passing", () => {
  return new Promise((resolve) => {
    resolve(true);
  });
});
