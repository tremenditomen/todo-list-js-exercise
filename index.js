// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title,description) {
const task = {
  tittle: title,
  description: description,
  complete: false,
  logState: function(){
    console.log(`${task.title}has ${task.complete ? " ": "not "}been completed`)
  },
  markCompleted: function(){
    this.complete =true
  }

};
 return task; 
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
  

// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter"); // task 0
const task2 = newTask("Do Laundry");
const tasks = [task1,task2]
 // task 1
console.log(tasks)
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
console.log("TASKS",tasks)
task2.title
task2.markCompleted();