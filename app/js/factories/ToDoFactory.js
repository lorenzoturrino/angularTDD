toDoApp.factory('ToDoFactory', function() {

  var todo = function(text) {
    this.text = text;
    this.complete = false;
  };


  return todo;

});
