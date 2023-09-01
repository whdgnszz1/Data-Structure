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

  #remove(node, value) {
    if (!node) {
      // 제거할 값이 bst에 존재하지 않는 경우
      return false; // 지울 값이 존재하지 않으면 false return
    }
    if (node.value === value) {
      // 자식입장
      // 지울 값을 찾은 경우
      if (!node.left && !node.right) {
        // leaf
        return null;
      } else if (!node.left) {
        // 왼팔만 없는 경우
        return node.right;
      } else if (!node.right) {
        // 오른팔만 없는 경우
        return node.left;
      } else {
        // 양팔 다 없는 경우
        const exchange = node.left;
        while (exchange.right) {
          exchange = exchange.right;
        }
        const temp = node.value;
        node.value = exchange.value;
        exchange.value = temp;
        node.left = this.#remove(node.left, temp);
        return node;
      }
    } else {
      // 부모입장
      if (node.value > value) {
        // return null이 들어오므로 node.left가 null이 된다.
        // 재귀에선 자식이 return하는 값이 부모로 전달됨.
        node.left = this.#remove(node.left, value);
        return node;
      } else {
        node.right = this.remove(node.right, value);
        return node;
      }
    }
  }

  // 1. 양팔이 다 없는 경우: 부모한테 자기자신을 잘라달라고 한다.
  // 2. 왼팔만 있거나 오른팔만 있는 경우: 부모한테 자신을 자식으로 대체해달라고 한다.
  // 3. 양팔인 경우: 자기 왼쪽중에서 가장 오른쪽에 있는애와 자리를 바꾸고 제거한다.
  remove(value) {
    const node = this.#remove(this.root, value);
    if (node) {
      this.root = node;
    }
  }
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
