var globalTODO = [];

exports.list = function(req, res) {
/*  res.render('todo', {
    title: 'Simple Todo List App',
    todos: globalTODO
  });
*/
  res.locals = {title: 'Title test', todos: globalTODO};
  return res.render('todo_hogan');  
};

exports.save = function(req, res) {
  var newTodo = {};
  newTodo.name = req.body['todo-text'];
  globalTODO.push(newTodo);
  res.redirect("/");
}

exports.delete = function(req, res) {
  todoID = req.body['todo-id'];
  globalTODO.splice(todoID, 1);
  res.redirect("/");
}
