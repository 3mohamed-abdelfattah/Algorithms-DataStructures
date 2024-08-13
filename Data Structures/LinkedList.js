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

    // ADD Last
    addLast(data) {
        let node = new Node(data);
        let current = this.head;
        if (!this.head) {
            this.head = node
        } else {
            //check if node have next 
            while (current.next) {
                current = current.next
            }
            //last element (next = null)
            current.next = node;
        }
        this.size++;
    }

    //ADD At Index
    addAtIndex(data, index) {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            return this.addFirst(data);
        }
        const node = new Node(data);
        let prev;
        let current = this.head;
        let count = 0;
        while (count < index) {
            prev = current;
            count++;
            current = current.next;
        }
        // Pass next
        prev.next = node;
        node.next = current;
        this.size++;
    }

    //Get All Data
    getAllData() {
        let current = this.head;
        while (current) {
            console.log('current : ', current.data);
            current = current.next
        }
        console.log("Size = ", this.size)
    }
}

const linkedList = new LinkedList();

linkedList.addFirst(1)
linkedList.addFirst(2)
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.addFirst(5)

linkedList.addLast(100)
linkedList.addLast(200)
linkedList.addLast(300)
linkedList.addLast(400)
linkedList.addLast(500)

linkedList.addAtIndex(100, 0)
linkedList.addAtIndex(100, 2)
linkedList.addAtIndex(100, 4)

linkedList.getAllData()
