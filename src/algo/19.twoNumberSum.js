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
twoNumberSum([3, 5, -1, 11, 6], 10);

//big O
//time - O(n*2) space- O(1)
