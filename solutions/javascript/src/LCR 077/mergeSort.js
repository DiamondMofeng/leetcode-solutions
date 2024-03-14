function getMid(node) {
  let p1 = node;
  let p2 = node?.next;
  while (p2 && p2.next) {
      p1 = p1.next;
      p2 = p2.next.next
  }
  return p1;
}

function mergeList(l1, l2) {
  const dummy = new ListNode()
  let p = dummy;
  let p1 = l1;
  let p2 = l2;
  while (p1 && p2) {
      if (p1.val > p2.val) {
          p.next = p2;
          p2 = p2.next;
      } else {
          p.next = p1;
          p1 = p1.next;
      }
      p = p.next;
  }
  if (p1) {
      p.next = p1;
  }
  if (p2) {
      p.next = p2
  }
  return dummy.next;
}

/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @return {ListNode}
*/
var sortList = function (head) {
  if (!head || !head.next) {
      return head;
  }
  const mid = getMid(head);
  const l2 = mid.next;
  mid.next = null;

  const l1 = head;

  const sortedL1 = sortList(l1);
  const sortedL2 = sortList(l2);

  return mergeList(sortedL1, sortedL2)
};