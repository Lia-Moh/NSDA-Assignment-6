class Task {
  constructor(name) {
    this.name = name;
    this.completed = true;
    this.id = Date.now();
  }
}

const myNewTask = new Task("working the assignment");

console.log(myNewTask);
const myNewTask2 = new Task("Calling my mom");

console.log(myNewTask2);