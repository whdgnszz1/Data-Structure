class LinkedList {
  length = 0;
  head = null;
  tail = null;

  add(value) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  search(index) {
    return this.#search(index)[1]?.value;
  }

  #search(index) {
    if (index < 0 || index >= this.length) return [null, null];

    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current?.next;
      count++;
    }
    return [current?.prev, current];
  }

  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      if (current.next) {
        current.next.prev = prev;
      } else {
        // 마지막 노드일 경우
        this.tail = prev;
      }
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일때
      this.head = current.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        // 리스트가 빈 경우
        this.tail = null;
      }
      this.length--;
      return this.length;
    } 
    // 삭제하고자 하는 대상이 없을때
    return -1;
  }
}

class Node {
  next = null;
  prev = null;
  constructor(value) {
    this.value = value;
  }
}
