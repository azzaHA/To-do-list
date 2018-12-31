function Task(content){
  var self = this;
  // text to hold task details
  self.taskContent = ko.observable(content);
  // isDone reflects the state of the task (done or still undone)
  self.isDone = ko.observable(false);
  // editing denotes whether it's view or edit mode
  self.editing = ko.observable(false);
  // high priority indicator
  self.priority = ko.observable(false);

  // Behaviors

  // set editing mode to true
  self.edit = function() {
    this.editing(true)
  };

  // toggle 'isDone' state
  self.toggleTaskState = function(){
    self.isDone(!self.isDone());
  };

  // toggle 'priority' state
  self.togglePriority = function(){
    self.priority(!self.priority());
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
