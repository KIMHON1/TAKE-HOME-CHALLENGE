function transformString(s) {
  let length = s.length;

  // Check divisibility by 3 and 5
  let divisibleBy3 = length % 3 === 0;
  let divisibleBy5 = length % 5 === 0;

  // Initialize the transformed string
  let transformedString = s;

  // Apply the reverse transformation if divisible by 3
  if (divisibleBy3) {
    transformedString = transformedString.split("").reverse().join("");
  }

  // Apply the ASCII conversion if divisible by 5
  if (divisibleBy5) {
    transformedString = transformedString
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  return transformedString;
}

// Example Usage:
let inputStr1 = "Hello World"; // Length is 11, not divisible by 3 or 5
let outputStr1 = transformString(inputStr1);
console.log(outputStr1); // Output: "Hello World"

let inputStr2 = "HelloWorld"; // Length is 10, divisible by 5
let outputStr2 = transformString(inputStr2);
console.log(outputStr2); // Output: "72 101 108 108 111 87 111 114 108 100"

let inputStr3 = "HelloWorldHello"; // Length is 15, divisible by both 3 and 5
let outputStr3 = transformString(inputStr3);
console.log(outputStr3); // Output: "111 108 108 101 72 100 108 114 111 87 111 108 108 101 72"
