describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with two toDo', function() {

  var todo1 = {text: "ToDo1", complete: true};
  var todo2 = {text: "ToDo2", complete: false};
  expect(ctrl.todos).toEqual([todo1,todo2]);
  });

  describe('#addToDo', function(){

    it('adds a todo to the todos array', function(){
      ctrl.addToDo('ToDo3');
      expect(ctrl.todos[2].text).toEqual('ToDo3');
    });
  });

  describe('#removeToDo', function(){

    it('removes a todo to the todos array', function(){
      ctrl.removeToDo();
      expect(ctrl.todos.length).toEqual(1);
    });
  });

});
