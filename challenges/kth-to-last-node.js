/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let firstPointer = head;
  let secondPointer = head;

  while(k > 0){
    firstPointer = firstPointer.next;
    k--;
    if(firstPointer === null){
      return undefined;
    }
  }
  while(firstPointer){
    console.log(secondPointer.value)
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
    
  }
  if(secondPointer === null){
    return undefined;
  }
  return secondPointer.value;
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
