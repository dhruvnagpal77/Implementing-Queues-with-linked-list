class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    // If empty queue
    if (!this.first){
      return undefined;
    }
    return this.first;
  }

  enqueue(value){
    var newNode = new Node(value);
    // If empty queue
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue(){
    // If empty queue
    if (!this.first){
      return undefined;
    }
    // Single node in the queue  
    else if (this.first == this.last){
      this.first = null;
      this.last = null;
    }
    else{
      this.first = this.first.next;
    }
    this.length--
  }
}

var myQueue = new Queue();
myQueue.enqueue('apple');
myQueue.enqueue('mango');
myQueue.enqueue('orange');
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue);
