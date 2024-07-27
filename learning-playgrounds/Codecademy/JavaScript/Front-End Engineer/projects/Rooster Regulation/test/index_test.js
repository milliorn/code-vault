const assert = require('assert');
const { it } = require('mocha');
const index = require('../index');

describe('Rooter', () => {
  describe('announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
      const actual = Rooster.announceDawn();
      assert.strictEqual(actual, expected);
    })
  })
  describe('timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const input = 1;
      const expected = '1'
      const actual = Rooster.timeAtDawn(input);
      assert.strictEqual(actual, expected);
    })
    it('passed a number less than 0', () => {
      const input = -1;
      const expected = RangeError;
      assert.throws(() => {
        Rooster.timeAtDawn(input);
      }, expected);
    })
    it('throws an error if passed a number greater than 23', () => {
      const input = 23;
      const expected = RangeError;
      assert.throws(() => {
        Rooster.timeAtDawn(input);
      }, expected);
    })
  })
});