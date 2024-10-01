function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];

  nums.every((num, i) => {
    if (num < target) {
      for (let ii = i + 1; nums.length > ii; ii++) {
        if (num + nums[ii] === target) {
          result.push(i, ii);
          return false;
        } else {
          return true;
        }
      }
    } else {
      return true;
    }
  });
  console.log(result);

  return result;
}

export default twoSum;
