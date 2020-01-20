//big O
//time - O(n*2) space- O(1)
/**---
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum].sort((a, b) => a - b);
      }
    }
  }
  return [];
}

const result = twoNumberSum([3, 5, -1, 11, 6], 10);
console.log(result);

------------- */

function twoNumberSum(array, targetSum) {
  const nums = {};

  for (const num of array) {
    const potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num].sort((a, b) => a - b);
    } else {
      nums[num] = true;
    }
  }
  return [];
}

twoNumberSum([1, 7, 9, 8, -2], 10);
//time -O(n) space - O(n)
