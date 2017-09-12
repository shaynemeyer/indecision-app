class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person('Alfred E. Newman', 98);

console.log(me.getDescription());

const you = new Person();

console.log(you.getDescription());