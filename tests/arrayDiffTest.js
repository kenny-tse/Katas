const assert = require('chai').assert;
let arrayDiff = require('../arrayDiff');

describe("#arrayDiff", () => {
  it("returns [2] for [1, 2], [1]", () => {
    assert.deepEqual(arrayDiff([1, 2, 3], []), [1, 2, 3]);
  });

  it("returns [2] for [1, 2, 1, 1]], [1]", () => {
    assert.deepEqual(arrayDiff([1, 2, 1, 1], [1]), [2]);1212
  });

  it("returns [] for [], [3]", () => {
    assert.deepEqual(arrayDiff([], [3]), []);
  });

  it("returns [1, 2, 3] for [1, 2, 3], []", () => {
    assert.deepEqual(arrayDiff([1, 2, 3], []), [1, 2, 3]);
  });
});