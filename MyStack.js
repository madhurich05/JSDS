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

let stk1 = new Stack(1);
stk1.push(1)
stk1.push(2)
stk1.push(3)
stk1.stack // [1, 2,3]
stk1.pop() // 3

stk1.reverse = true;
stk1.pop() // 1
