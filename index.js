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
const task1 = newTask("Clean Cat Litter","thow cat litter out"); // task 0
const task2 = newTask("Do Laundry","get rid of dirty clothes");
const tasks = [task1,task2]
 // task 1
// console.log(tasks)
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted;
task1.logState; // Clean Cat Litter has been completed
task2.title
task2.markCompleted;
console.log("TASKS",tasks)