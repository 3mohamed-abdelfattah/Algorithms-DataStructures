class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // ADD First
    addFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
}

const kk = new LinkedList();
kk.addFirst(1)
kk.addFirst(2)
kk.addFirst(3)
console.log(kk);

