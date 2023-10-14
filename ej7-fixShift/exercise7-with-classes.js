class CustomArray {
  
  length = 0;
  elements = {};

  constructor(...args){
    if(!args || args.length === 0){
      return;
    }
    args.map((elem, index) => {
      this.elements[index] = elem
      this.length++;
    })
  }

  push(elem){ // O(1)
    this.elements[this.length] = elem;
    this.length++;
  }
  
  pop(){ // O(1)
    const last = this.elements[this.length - 1];
    delete this.elements[this.length - 1];
    this.length--;
    return last;
  }

  shift(){ // O(n)
    const first = this.elements[0];
    for(let i = 0; i < this.length; i++){
      this.elements[i] = this.elements[i+1];
    }
    delete this.elements[this.length - 1];
    this.length--;
    return first;
  }
}

const c = new CustomArray(1,2,3,4,5,6,7,8,9,10);
console.log(c.length);
c.push(666);
console.log(c.elements);
console.log(c.length);
console.log(c.pop());
console.log(c.elements);
console.log(c.length);
console.log(c.shift());
console.log(c.elements);
console.log(c.length);
