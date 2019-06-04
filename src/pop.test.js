import popMethod from "./pop";

test("Method should return undefined if we pass a []", () => {
  expect(popMethod()).toEqual(undefined);
});

test("Method should return the one element of a collection if we pass a collection with one entry", () => {
  expect(popMethod(10)).toEqual(10);
});

test("Method should return the last element of a collection if we pass a collection of three entries", () => {
  expect(popMethod(5, 15, 100)).toEqual(100);
});