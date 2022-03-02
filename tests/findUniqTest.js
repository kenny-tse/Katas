const assert = require('chai').assert;
let findUniq = require('../findUniq');

describe("#findUniq", () => {
  it("returns 1 for [1, 0, 0]", () => {
    assert.strictEqual(findUniq([1, 0, 0]), 1);
  });

  it("returns 1 for [0, 1, 0]", () => {
    assert.strictEqual(findUniq([0, 1, 0]), 1);
  });

  it("returns 1 for [0, 0, 1]", () => {
    assert.strictEqual(findUniq([0, 0, 1]), 1);
  });

  it("returns 5 for [1, 1, 1, 5, 1, 1]", () => {
    assert.strictEqual(findUniq([1, 1, 1, 5, 1, 1]), 5);
  });

  it("returns 10 for [3, 10, 3, 3, 3]", () => {
    assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
  });
});