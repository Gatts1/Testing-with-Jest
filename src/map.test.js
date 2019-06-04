import mapMethod from "./map";

test("Method should return [] if we pass a []", () => {
  expect(mapMethod()).toEqual([]);
});

test("Method should return a collection with one entry if we pass a collection with one entry", () => {
  expect(mapMethod(10)).toEqual([20]);
});

test("Method should return a collection with three entries if we pass a collection of three entries", () => {
  expect(mapMethod(5, 15, 100)).toEqual([10, 30, 200]);
});