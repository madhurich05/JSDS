//  Implementation of stacks with reverse order for push and pop allowed(primarily works as queue)

class Stack {
    constructor(...items) {
        this.reverse = false;
        this.stack = [...items];
    }
    push(...items) {
        return this.reverse ? this.stack.unshift(...items) : this.stack.push(...items);
    
    }
    pop() {
        return this.reverse ? this.stack.shift() : this.stack.pop();
         
    }
}
