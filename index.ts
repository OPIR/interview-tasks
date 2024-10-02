import twoSum from "./week_1/two-sum";
import isValid from "./week_1/valid-parenthesses";
import {
  mergeTwoLists,
  ListNode,
} from "./week_1/merge-linked-list/merge-linked-lists";
import {
  addNodesFromArray,
  logResult,
} from "./week_1/merge-linked-list/helper";
import maxProfit from "./week_1/max-profit";
import isPalindrome from "./week_1/palindrome";

// twoSum([7, 3, 2, 4], 6);

// console.log(isValid("()"));
// console.log(isValid("([])"));
// console.log(isValid("()[]"));
// console.log(isValid("([]])"));
// console.log(isValid("[({})[{}]]"));

// const head1: ListNode = new ListNode(1, null);
// const head2: ListNode = new ListNode(1, null);

// addNodesFromArray(head1, [1, 1, 1, 2, 6, 8, 70]);
// addNodesFromArray(head2, [1, 1, 2, 2, 3, 4, 6, 33, 43, 72]);

// logResult(structuredClone(head1));
// logResult(structuredClone(head2));

// const resHead = mergeTwoLists(null, null);
// logResult(structuredClone(resHead));

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

console.log(
  "A man, a plan, a canal: Panama",
  isPalindrome("A man, a plan, a canal: Panama")
);
console.log("race a car", isPalindrome("race a car"));
