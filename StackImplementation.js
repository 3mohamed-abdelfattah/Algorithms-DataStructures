class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        console.log(`element: ${element} Pushed -> Index: ${this.count}`);
        this.count++;
    }

    pop() {
        if (this.count > 0) {
            let removeElement = this.items[this.count - 1];
            this.items.length = this.count - 1;

            this.count--;
            console.log(`Removed -> ${removeElement} Count = ${this.count}`);
            return removeElement;
        }
        return "Stack Empty";
    }

    isEmpty() {
        const checkEmpty = this.count === 0 ? "Stack Empty" : `Stack = ${this.items.slice(0, this.count).join(', ')} `;
        console.log(checkEmpty);
    }

    peek() {
        if (this.count > 0) {
            return this.items[this.count - 1];
        }
        return "Stack is empty";
    }

    size() {
        return this.count;
    }

    clear() {
        this.items = [];
        this.count = 0;
    }
}

// Test the class
const stack = new Stack();
stack.isEmpty(); // Should print "Stack Empty"
stack.push(1);
stack.push(2);
stack.push(3);
stack.isEmpty(); // Should print "Stack = 1, 2, 3"
stack.pop(); // Removes 3
stack.pop(); // Removes 2
stack.isEmpty(); // Should print "Stack = 1"
console.log(stack.peek()); // Should print 1
console.log(stack.items); // Should print [1]
console.log(stack.size()); // Should print 1
stack.clear(); // Clears the stack
console.log(stack.items); // Should print []
stack.isEmpty(); // Should print "Stack Empty"

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // Removes 3
console.log(stack.items); // Should print [1, 2]
stack.isEmpty(); // Should print "Stack = 1, 2"