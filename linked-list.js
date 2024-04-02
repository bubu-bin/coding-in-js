class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * Returns the number of nodes in the linked list.
   * @returns {number} the number of nodes in the linked list
   */
  size() {
    let node = this.head;
    let size = 0;

    while (node) {
      size++;
      node = node.next;
    }

    return size;
  }

  /**
   * Adds a new node with the given value to the end of the list.
   * @param {number} value The value to add to the list
   * @returns {void}
   */
  add(value) {
    let node = this.head;

    if (!node) {
      this.head = new ListNode(value);
      return;
    }

    while (node.next) {
      node = node.next;
    }

    node.next = new ListNode(value);
  }

  /**
   * Empties the list.
   * @returns {void}
   */
  clear() {
    this.head = null;
  }

  /**
   * Returns the node at the given value.
   * @param {number} value The value of the node to return
   * @returns {ListNode | null} The node with the given value, or null if it does not exist
   */
  find(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return node;
      }

      node = node.next;
    }

    return null;
  }

  /**
   * Prints the values of the nodes in the list.
   * @returns {void}
   */
  print() {
    let node = this.head;

    if (!node) {
      console.log("list is empty");
      return;
    }

    console.log(">>> start print <<<");
    while (node) {
      console.log(node.value);
      node = node.next;
    }
    console.log(">>> end print <<<");
  }

  /**
   * Deletes the node with the given value from the list.
   * @param {number} value The value of the node to delete
   * @returns {boolean} `true` if the node was deleted, `false` otherwise
   */
  delete(value) {
    let node = this.head;
    let prev = null;

    while (node) {
      if (node.value === value) {
        if (node === this.head) {
          this.head = node.next;
          return true;
        }

        prev.next = node.next;
        node = null;
        return true;
      }

      prev = node;
      node = node.next;
    }

    return false;
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(5);
linkedList.add(2);
linkedList.add(3);

linkedList.delete(1);
linkedList.print();
