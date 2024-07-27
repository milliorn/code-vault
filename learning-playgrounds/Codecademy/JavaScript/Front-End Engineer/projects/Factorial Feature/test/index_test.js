var assert = require("assert");
var Calculate = require('../index')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('output of 5! is equal to 120', () => {
      const inputNumber = Calculate.factorial(5);
      const expectedResult = 120;
      assert.strictEqual(inputNumber, expectedResult);
    });
    it('input of 3! is equal to 6', () => {
      const inputNumber = Calculate.factorial(3);
      const expectedResult = 6;
      assert.strictEqual(inputNumber, expectedResult);
    });
    it('input of 0! is equal to 1', () => {
      const inputNumber = Calculate.factorial(0);
      const expectedResult = 1;
      assert.strictEqual(inputNumber, expectedResult);
    });
  });
});