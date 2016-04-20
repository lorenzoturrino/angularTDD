<<<<<<< HEAD
App.controller('ToDoController', [function() {
  this.todo = "ToDo1";
=======
angular.module('toDoApp').controller('ToDoController', [function() {

  var self = this;

  self.todos = ["ToDo1: completed","ToDo2: not completed"];

  self.addToDo = function(todo) {
    self.todos.push(todo);
  };

>>>>>>> 0cd9fbc09474549bad32ee1ebfd97ce36c6a4a15
}]);
