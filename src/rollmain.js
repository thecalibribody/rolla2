const parseArgument = require("./rollparse");
const roll = require("../src/rollfunc.js");

try {
  const argument = process.argv[2];
  const parsedArgument = parseArgument(argument);

  let result = roll(parsedArgument);
  console.log(result);
} catch (error) {
  console.log("Received Error. Ensure you're using correct argument syntax.");
  console.log(
    "The argument should be: {number of dice}d{type of dice}. Make sure it is all one word."
  );
}
