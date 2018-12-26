function Task(content){
  var self = this;
  self.content = ko.observable(content);
}

function ToDoViewModel(){
  var self = this;
  self.task = new Task("");
}

ko.applyBindings(new ToDoViewModel());
