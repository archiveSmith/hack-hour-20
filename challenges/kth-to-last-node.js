//////////////////
///Needs Review///
//////////////////

/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
let array = [];
  while(head.next){
    array.push(head.value);
    head=head.next;
  }
  array.push(head.value);
  return array[array.length - k];
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;


console.log(kthToLastNode(2, a));
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
