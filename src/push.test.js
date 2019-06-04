import pushMethod from "./push";

test("Method should return an array with one value if we pass a a empty array and a value", () => {
  expect(pushMethod([], 2)).toEqual([2]);
});

test("Method should return an array with one more element at the end if we pass a collection with one entry", () => {
  expect(pushMethod([10], 20)).toEqual([10, 20]);
});

test("Method should return a collection with a value at the end if we pass a collection of three entries", () => {
  expect(pushMethod([5, 15, 100], 200)).toEqual([5, 15, 100, 200]);
});
