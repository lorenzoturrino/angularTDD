describe('ToDoFactory', function() {

  beforeEach(module('toDoApp'));

  var toDo;

  beforeEach(inject(function(ToDoFactory) {
    toDo = new ToDoFactory('New ToDo');
  }));

  it('is incomplete by default', function() {
    expect(toDo.complete).toBe(false);
  });

});
