describe('Todos tracker', function() {
  it('has a title', function() {

    browser.get('/');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('has several ToDos', function() {
    browser.get('/');
    var todos = $$('#todoCont li');
    expect(todos.first().getText()).toEqual('ToDo1: complete');
    expect(todos.last().getText()).toEqual('ToDo2: incomplete');
  });

  it('clicking a Add button adds a todo', function() {
    browser.get('/');
    $('#inputText').sendKeys('ToDo3');
    $('#addToDo').click();
    var todos = $$('#todoCont li');
    expect(todos.last().getText()).toEqual('ToDo3: incomplete');
  });

  it('clicking a Remove button removes a todo', function() {
    browser.get('/');
    $('#removeToDo').click();
    var todos = $$('#todoCont li');
    expect(todos.count()).toEqual(1);
  });

});
