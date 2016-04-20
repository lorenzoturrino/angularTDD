angular.module('toDoApp').controller('ToDoController', [function() {

  var self = this;

  self.todos = [{text: "ToDo1", status: "complete"},{text: "ToDo2", status: "incomplete"}];

  self.addToDo = function(todo) {
    self.todos.push({text: todo, status: "incomplete"});
  };

  self.removeToDo = function() {
    self.todos.pop();
  }

}]);
