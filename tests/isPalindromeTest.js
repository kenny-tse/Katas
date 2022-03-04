const assert = require('chai').assert;
let isPalindrome = require('../isPalindrome');

describe("#isPalindrome", () => {
  it("returns true for neveroddoreven", () => {
    assert.strictEqual(isPalindrome("neveroddoreven"), true);
  });

  it("returns true for racecar", () => {
    assert.strictEqual(isPalindrome("racecar"), true);
  });

  it("returns false for notpalindrome", () => {
    assert.strictEqual(isPalindrome("notpalindrome"), false);
  });
});