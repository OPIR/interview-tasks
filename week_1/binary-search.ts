function search(nums: number[], target: number): number {
  let midInd = Math.floor(nums.length / 2);
  if (nums[midInd] < target) {
    return nums.slice(midInd).indexOf(target) + midInd;
  } else {
    return nums.slice(0, midInd).indexOf(target);
  }
}

export default search;
