// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.insertAt(data, 0)

    // this.head = new Node(data, this.head)

    // const n = new Node(data, this.head)
    // this.head = n
  }

  size() {
    let counter = 0
    let n = this.head
    while(n) {
      counter++
      n = n.next
    }
    return counter
  }

  getFirst() {
    return this.getAt(0)

    // return this.head
  }

  getLast() {
    return this.getAt(this.size() - 1)

    // if(!this.head) return null
    // let n = this.head
    // while(n) {
    //   if(!n.next) return n
    //   n = n.next
    // }

    // if(!this.head) return null
    // while(this.head) {
    //   if(!this.head.next) return this.head
    //   this.head = this.head.next
    // }

    // const head = this.head
    // let result = this.head
    // while(this.head) {
    //   result = this.head
    //   this.head = this.head.next
    // }
    // this.head = head
    // return result
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.removeAt(0)

    // if(!this.head) return
    // this.head = this.head.next
  }

  removeLast() {
    this.removeAt(this.size() - 1)

    // let prev = this.head
    // let current = prev ? prev.next : null
    // if(!prev || !current) {
    //   this.head = null
    //   return
    // }
    // while(current.next) {
    //   prev = current
    //   current = current.next
    // }
    // prev.next = null

    // const originalHead = this.head
    // let prev = null
    // while(this.head.next) {
    //   prev = this.head
    //   this.head = this.head.next
    // }
    // prev.next = null
    // this.head = originalHead
  }

  insertLast(record) {
    // this.insertAt(record, this.size() - 1)

    // const last = this.getLast()
    // const n = new Node(record)
    // if(last) {
    //   last.next = n
    // } else {
    //   this.head = n
    // }

    let node = this.head
    const n = new Node(record)
    if(!this.head) {
      this.head = n
      return
    }
    while(node.next) {
      node = node.next
    }
    node.next = n

    // const n = new Node(record)
    // if(!this.head) {
    //   this.head = n
    //   return
    // }
    // // while(this.head.next) {
    // //   this.head = this.head.next
    // // }
    // // this.head.next = n
    // this.getLast().next = n
  }

  getAt(idx) {
    let n = this.head
    let counter = 0
    while(n) {
      if(counter === idx) return n
      n = n.next
      counter++
    }
    return null
  }

  removeAt(idx) {
    if(!this.head) return
    if(idx === 0) {this.head = this.head.next; return}

    const prev = this.getAt(idx - 1)
    if(!prev) return
    prev.next = this.getAt(idx + 1)
    
    // let prev = this.head
    // let current = prev ? prev.next : null
    // let counter = 0
    // while(prev) {
    //   if(counter === idx) {
    //     this.head = current
    //     return
    //   }
    //   prev = prev.next
    //   counter++
    // }
    // return null
  }

  insertAt(data, idx) {
    let n = new Node(data)
    let node = this.head
    let prev = null
    if(idx === 0) {
      if(this.head) n.next = node
      this.head = n
      return
    }
    let counter = 0
    while(node) {
      if(counter === idx - 1) {
        n.next = node.next
        node.next = n
        return
      }
      if(counter > 0) prev = node
      node = node.next
      counter++
    }
    if(prev) prev.next = n
    // this.insertLast(data)
  }

  forEach(fn) {
    let node = this.head
    let counter = 0
    while(node) {
      fn(node, counter)
      node = node.next
      counter++
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
