// 조회, 삭제, 삽입이 O(log(n))
class BinarySearchTree {
  root = null;

  #insert(node, value) {
    if (node.value > value) {
      // 루트 노드보다 작은값이면
      if (node.left) {
        this.#insert(node.left, value);
      } else {
        node.left = new Node(value);
      }
    } else if (node.value < value) {
      // 루트 노드보다 큰값이면
      if (node.right) {
        this.#insert(node.right, value);
      } else {
        node.right = new Node(value);
      }
    } else {
    }
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.#insert(this.root, value);
    }
    // 같은 값을 넣을 경우 에러처리
  }

  #search(node, value) {
    if (node.value > value) {
      // 더 작은값 찾을때
      if (!node.left) {
        return null;
      }
      if (node.left.value === value) {
        return node.left;
      }
      return this.#search(node.left, value);
    } else if (node.value < value) {
      if (!node.right) {
        return null;
      }
      if (node.right.value === value) {
        return node.right;
      }
      return this.#search(node.right, value);
    }
  }

  search(value) {
    if (!this.root) {
      return null;
    }
    if (this.root.value === value) {
      return this.root;
    }
    this.#search(this.root, value);
  }


  // 양팔인애: 자기 왼쪽중에서 가장 오른쪽
  remove(value) {}
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}

const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(10);
bst.insert(3);
bst.insert(1);
bst.insert(14);
bst.insert(6);
bst.insert(7);
bst.insert(4);
bst.insert(13);
