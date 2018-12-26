function Task(content){
  var self = this;
  self.taskContent = content;
}

function ToDoViewModel(){
  var self = this;
  self.newTask = ko.observable('');
  self.tasks = ko.observableArray([]);

  self.addTask = function(){
    self.tasks.push(new Task(self.newTask()));
    console.log(self.tasks());
  };
}

ko.applyBindings(new ToDoViewModel());
