export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

export function mergeTwoLists(
  node1: ListNode | null,
  node2: ListNode | null
): ListNode | null {
  if (node1 || node2) {
    let head: ListNode = new ListNode(0, null);

    comapreValuesAndPush(node1, node2, head);
    return head;
  } else {
    return null;
  }
}

function comapreValuesAndPush(
  node1: ListNode,
  node2: ListNode,
  lastNode: ListNode
): void {
  if (!node1 && !node2) {
    return;
  }
  if (node1?.next || node2?.next || (node1?.val && node2?.val)) {
    const next: ListNode = new ListNode(0, null);
    lastNode.next = next;
  }
  if ((node1 && !node2) || node1?.val < node2?.val) {
    lastNode.val = node1.val;
    node1 = node1.next;
  } else if (node2) {
    lastNode.val = node2.val;
    node2 = node2.next;
  }

  comapreValuesAndPush(node1, node2, lastNode.next);
}
