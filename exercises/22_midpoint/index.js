// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  if(!list.head) return null
  let slow = list.getFirst()
  let fast = list.getFirst()
  while(fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
  
  // if(!list.head) return null
  // let slow = list.head
  // let fast = list.head
  // while(fast) {
  //   if(!fast.next) return slow
  //   const tmp = slow
  //   slow = slow.next
  //   fast = fast.next ? fast.next.next : null
  //   if(!fast) return tmp
  // }
}

module.exports = midpoint;
