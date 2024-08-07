class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return "Stack is empty"
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return "Stack is empty"
        }
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2
stack.clear();
console.log(stack.isEmpty()); // true