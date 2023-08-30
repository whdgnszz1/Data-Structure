class LinkedList {
  length = 0;
  // 처음에 있는 것
  head = null;

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
    return this.length;
  }

  // index가 몇번 넘기는지를 의미
  search(index) {
    return this.#search(index)[1]?.value;
  }

  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }

  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if(current) {
      // index가 0일때
      this.head = current.next
      return this.length
    } 
  }
}

class Node {
  next = null;
  // 외부에서 전달받을 값은 constructor 써줘야함.
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();
ll.length;
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.search(6); // undefined
ll.remove(4);
ll.search(4); // 6
ll.remove(4);
ll.search(4); // undefined
ll.search(4); // undefined

console.log("hi");
