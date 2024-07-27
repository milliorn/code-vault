const yaml = require("js-yaml");
const fs = require("fs");

// Get document, or throw exception on error
try {
  const yamlData = fs.readFileSync("validator.yaml", "utf8");
  const parsedData = yaml.load(yamlData);

  console.log(yamlData);

  const passwordPattern = parsedData.password.pattern;
  const pwordValidator = new RegExp(passwordPattern);

  const myPassword = "reallyStrongPassword21!";
  console.log(pwordValidator.test(myPassword)); //true

  const phonePattern = parsedData.nigerianPhoneNumber.pattern;

  phoneValidator = new RegExp(phonePattern);

  const myPhoneNum = "08133333333";
  console.log(phoneValidator.test(myPhoneNum)); //true;
} catch (e) {
  console.log(e);
}
