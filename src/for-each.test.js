import forEachMethod from "./for-each";


test("Method should return [] if we pass a []", () => {
  expect(forEachMethod()).toEqual([]);
});

test("Method should return a collection with one entry if we pass a collection with one entry", () => {
  expect(forEachMethod("Sergio")).toEqual(["Welcome Sergio"]);
});

test("Method should return a collection with two entries if we pass a collection of two entries", () => {
  expect(forEachMethod("Jona", "Gatts")).toEqual(["Welcome Jona", "Welcome Gatts"]);
});

test("Method should return a Collection with repeated entries (x, y, x) if we pass a Collection with repeated entries (x, y, x)", () => {
  expect(forEachMethod("Jona", "Gatts", "Jona")).toEqual(["Welcome Jona", "Welcome Gatts", "Welcome Jona"]);
});

// Null argument
// Empty collection
// Collection with one entry (sanity)
// Collection with two entries (sanity)
// Collection with repeated entries (x, y, x)
// Collection where putting an early entry causes an exception, if that's feasible
