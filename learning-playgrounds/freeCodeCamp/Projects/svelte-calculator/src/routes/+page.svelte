<script>
	let display_number = '';
	const select = (/** @type {string | number} */ num) => () => (display_number += num);
	const clear = () => (display_number = '');

	/**
	 * @type {number | undefined}
	 */
	let operand;
	/**
	 * @type {number | undefined}
	 */
	let result;

	function addition() {
		operand = Number(display_number);
		display_number = '';
	}

	function equals() {
		// result is here to resolve a null issue with type checking.
		result = 0;
		const displayNumberAsNumber = Number(display_number);

		if (!isNaN(displayNumberAsNumber) && operand !== undefined) {
			switch (operator) {
				case '+':
					result = operand + displayNumberAsNumber;
					break;
				case '-':
					result = operand - displayNumberAsNumber;
					break;
				case '*':
					result = operand * displayNumberAsNumber;
					break;
				case '/':
					result = operand / displayNumberAsNumber;
					break;
				default:
					break; // Handle any other operator or no operator
			}
			display_number = result.toString();
		}
	}

	/**
	 * @type {string | undefined}
	 */
	let operator;
	let operators = ['+', '-', '*', '/'];

	/**
	 * @param {string} sign
	 */
	function operation(sign) {
		operand = Number(display_number);
		operator = sign;
		display_number = '';
	}
</script>

<div class="calculator">
	<div class="display">
		{display_number.length < 23 ? display_number : display_number.substring(0, 23)}
	</div>
	<div class="buttons">
		<button on:click={select(7)}>7</button>
		<button on:click={select(8)}>8</button>
		<button on:click={select(9)}>9</button>
		<button on:click={() => operation(operators[0])} class="operator">+</button>
		<button on:click={select(4)}>4</button>
		<button on:click={select(5)}>5</button>
		<button on:click={select(6)}>6</button>
		<button on:click={() => operation(operators[1])} class="operator">-</button>
		<button on:click={select(1)}>1</button>
		<button on:click={select(2)}>2</button>
		<button on:click={select(3)}>3</button>
		<button on:click={() => operation(operators[2])} class="operator">*</button>
		<button on:click={select(0)}>0</button>
		<button on:click={select('.')}>.</button>
		<button on:click={clear} class="clear">C</button>
		<button on:click={() => operation(operators[3])} class="operator">/</button>
		<button on:click={equals} class="equals">=</button>
	</div>
</div>

<style>
	.calculator {
		display: inline-block;
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	.display {
		font-size: 24px;
		border: 1px solid #ccc;
		height: 24px;
		padding: 10px;
		margin-bottom: 10px;
		width: 300px;
		text-align: right;
	}
	.buttons {
		display: grid;
		grid-template-columns: repeat(4, 75px);
		gap: 5px;
	}

	button {
		padding: 10px;
		font-size: 18px;
		border: none;
		cursor: pointer;
		border-radius: 5px;
		font-family: Arial, sans-serif;
		text-align: center;
	}
	.operator {
		border: 0px solid #a46d19;
		background: #f90;
	}
	.clear {
		border: 0px solid #000;
		background: red;
	}
	.equals {
		border: 0px solid #000;
		background: #245be9;
		width: 320px;
	}
	.operator:hover {
		background: #ffd700;
	}
	.clear:hover {
		background: #ffc0cb;
	}
	.equals:hover {
		background: #add8e6;
	}
</style>
