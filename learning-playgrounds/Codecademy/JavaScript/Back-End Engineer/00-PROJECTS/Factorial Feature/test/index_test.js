import { equal } from "assert";
import factorial from "../index.js";
describe("Calculate", () => {
	describe("factorial", () => {
		it("returns 120 when given 5", () => {
			const inputNumber = 5;
			const expectedOutput = 120;

			const actual = factorial(inputNumber);

			equal(expectedOutput, actual);
		});

		it("returns 6 when given 3", () => {
			const inputNumber = 3;
			const expectedOutput = 6;

			const actual = factorial(inputNumber);

			equal(expectedOutput, actual);
		});
	});
});
