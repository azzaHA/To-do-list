function Task(content){
  var self = this;
  self.content = ko.observable(content);
}

function ToDoViewModel(){
  var self = this;
  self.task = ko.observable("first task");
  console.log(self.task());


}

ko.applyBindings(new ToDoViewModel());
