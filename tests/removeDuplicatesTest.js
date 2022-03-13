const assert = require('chai').assert;
let removeDuplicates = require('../removeDuplicates');

describe("#removeDuplicates", () => {
  it("returns [1, 2] for [1, 1, 1, 1, 2, 2]", () => {
    assert.deepEqual(removeDuplicates([1, 1, 1, 1, 2, 2]), [1, 2]);
  });

  it("returns [1, 2] for [1, 2]", () => {
    assert.deepEqual(removeDuplicates([1, 2]), [1, 2]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(removeDuplicates([]), []);
  });

  it("returns [3] for [3,3,3,3,3,3,3,3,3,3,3]", () => {
    assert.deepEqual(removeDuplicates([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), [3]);
  });
});
