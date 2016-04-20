angular.module('toDoApp').controller('ToDoController', [function() {

  var self = this;

  self.todos = ["ToDo1: completed","ToDo2: not completed"];

  self.addToDo = function(todo) {
    self.todos.push(todo);
  };

}]);
