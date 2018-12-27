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

  self.addTask = function(){
    self.tasks.push(new Task(self.newTask()));
  };

}

ko.applyBindings(new ToDoViewModel());
