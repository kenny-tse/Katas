const assert = require('chai').assert;
let cakes = require('../cakes');

describe("#cakes", () => {
  it("returns 2 for { flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }", () => {
    assert.strictEqual(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }), 2);
  });

  it("returns 0 for { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }", () => {
    assert.strictEqual(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }), 0);
  })
});