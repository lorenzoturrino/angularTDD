describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with two toDo', function() {
  expect(ctrl.todos).toEqual(["ToDo1: completed","ToDo2: not completed"]);
  });

  describe('#addToDo', function(){

    it('adds a todo to the todos array', function(){
      ctrl.addToDo('ToDo3');
      expect(ctrl.todos[2]).toEqual('ToDo3');
    });

  });

});
