toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {

  var self = this;

  self.todos = [{text: "ToDo1", complete: true},{text: "ToDo2", complete: false}];

  self.addToDo = function(todo) {
    self.todos.push({text: todo, complete: false});
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

  self.dot = new ToDoFactory('cheese');

}]);
