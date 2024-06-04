function hasContiguousSubarrayWithSum(arr, target) {
  let start = 0; // Initialize the start of the window
  let currentSum = 0; // Initialize the current sum of the window

  // Iterate over the array with the end pointer
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end]; // Add the current element to the current sum

    // While the current sum exceeds the target and the window is valid
    while (currentSum > target && start <= end) {
      currentSum -= arr[start]; // Subtract the element at the start of the window
      start++; // Move the start pointer to the right
    }

    // Check if the current sum equals the target
    if (currentSum === target) {
      return true; // If found, return true
    }
  }

  return false; // If no such subarray is found, return false
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(hasContiguousSubarrayWithSum(arr, target)); // Output: true
