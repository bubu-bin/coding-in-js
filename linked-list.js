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

  size() {
    let node = this.head;
    let size = 0;

    while (node) {
      size++;
      node = node.next;
    }

    return size;
  }

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

  clear() {
    this.head = null;
  }

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
