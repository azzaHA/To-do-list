function Task(content){
  var self = this;
  self.taskContent = ko.observable(content);
  self.isDone = ko.observable(false);
  self.editing = ko.observable(false);
  // Behaviors
  self.edit = function() { this.editing(true) }

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

  self.doneTasks = ko.computed(function(){
    var total = 0;
    for (var i=0; i<self.tasks().length; i++){
      if (self.tasks()[i].isDone()){
        total++;
      }
    }

    return total;
  });

  self.remainingTasks = ko.computed(function(){
    var total = 0;
    for (var i=0; i<self.tasks().length; i++){
      if (!self.tasks()[i].isDone()){
        total++;
      }
    }
    return total;
  });

  self.addTask = function(){
    if (!self.newTask()){
      return;
    }
    var taskText = self.newTask();
    taskText = taskText.trim();
    self.newTask(taskText);
    self.tasks.push(new Task(taskText));
    self.newTask('');
  };

  self.removeTask = function(task){
    self.tasks.remove(task);
  };


}

ko.applyBindings(new ToDoViewModel());
