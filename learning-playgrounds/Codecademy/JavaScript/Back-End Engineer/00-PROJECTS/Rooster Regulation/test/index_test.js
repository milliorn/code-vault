
import assert from "assert";
import Rooster from "../index.js"

describe("Rooster", () => {
	describe("announceDawn", () => {
		it("returns a rooster call", () => {
			const expected = "cock-a-doodle-doo!";
			const actual = Rooster.announceDawn();

			assert.equal(actual, expected);
		});
	});

	describe("timeAtDawn", () => {
		it("returns its argument as a string", () => {
			const results = 12;
			const expected = "12";
			const actual = Rooster.timeAtDawn(results);

			assert.strictEqual(expected, actual);
		});
		it("throws an error if passed a number less than 0", () => {
			const results = -1;
			const expected = RangeError;

			assert.throws(() => {
				Rooster.timeAtDawn(results);
			}, expected);
		});
		it("throws an error if passed a number less than 0", () => {
			const results = 24;
			const expected = RangeError;

			assert.throws(() => {
				Rooster.timeAtDawn(results);
			}, expected);
		});
	});
});
