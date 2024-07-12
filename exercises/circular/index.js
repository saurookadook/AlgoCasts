// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  let proceed = true;
  let isOrNot = false;

  while (proceed && fast) {
    if (!fast.next) {
      proceed = false;
    } else if (fast.next.next) {
      if (slow === fast.next.next || slow === fast.next) {
        proceed = false;
        isOrNot = true;
      }
    }
    slow = slow.next;
    fast = fast.next.next
  }

  return isOrNot;
}

module.exports = circular;


// SG SOLUTION
// function sgcircular(list) {
//   let slow = list.getFirst();
//   let fast = list.getFirst();

//   while (fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       return true;
//     }
//   }

//   return false;
// }