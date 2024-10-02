import { ListNode } from "./merge-linked-lists";

export function addNodesFromArray(head: ListNode, arr: number[]): void {
  if (arr[1]) {
    head.next = new ListNode(arr[1], null);
    arr.shift();
    addNodesFromArray(head.next, arr);
  } else {
    return;
  }
}

export function logResult(head: ListNode): void {
  if (head) {
    console.log(head.val);
    logResult(head.next);
  } else {
    return;
  }
}
