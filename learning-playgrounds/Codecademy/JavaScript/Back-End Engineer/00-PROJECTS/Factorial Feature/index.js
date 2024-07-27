const Calculate = {
	factorial(inputNum) {
		if (inputNum === 0) {
			return 1;
		}

		for (var i = inputNum - 1; i >= 1; i--) {
			inputNum *= i;
		}
		return inputNum;
	},
};

export default Calculate;
