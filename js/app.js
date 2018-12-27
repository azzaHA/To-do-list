function Task(content){
  var self = this;
  self.taskContent = ko.observable(content);
  self.isDone = ko.observable(false);

  self.toggleTaskState = function(){
    self.isDone(!self.isDone());
  };
}

function ToDoViewModel(){

  var self = this;
  self.newTask = ko.observable('');
  self.tasks = ko.observableArray([]);

  self.totalTasks = ko.computed(function(){
    return self.tasks().length;
  });

  self.addTask = function(){
    self.tasks.push(new Task(self.newTask()));
    console.log(self.totalTasks());
  };

  self.removeTask = function(task){
    self.tasks.remove(task);
    console.log(self.totalTasks());
  };



}

ko.applyBindings(new ToDoViewModel());
