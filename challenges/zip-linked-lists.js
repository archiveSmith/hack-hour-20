/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node (val) {
  this.value = val;
  this.next = null;
}


function zip (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let zipped = new Node(l1.val);

  while (l1.next !== null || l2.next !== null) {
    if (l2.next !== null) {
      zipped.next.val = l2.val;
    }


  }
};

module.exports = { Node: Node, zip: zip };
