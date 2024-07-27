// Write Test:
function additionCalculatorTester() {
  additionCalculator(4, 6) === 10
    ? console.log("✔ Test Passed")
    : console.error("❌ Test Failed");
}

// Develop Program:
const additionCalculator = (a, b) => a + b;

// Run Test:
additionCalculatorTester();
