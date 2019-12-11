import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
  @Input() newTask: object;

  dataTransfer: any;
  newTasks: any;

  tasks = {
    completed: ["abc", "cde", "def"],
    progress: ["efg", "hij", "klm"],
    new: ["plo", "ujc", "ole"],
    backlog: ["ytg", "olk", "uig"]
  };

  constructor() {
    this.newTasks = JSON.parse(localStorage.getItem("project")).stories;
    console.log(this.newTasks);
    this.tasks["new"] = [];
    this.tasks["new"] = this.newTasks;
  }

  ngOnInit() {}

  onDragStart(event, item, type) {
    event.dataTransfer.setData("item", item);
    event.dataTransfer.setData("type", type);
  }

  onDrop(event, type) {
    event.preventDefault();
    let dropItem = event.dataTransfer.getData("item");
    let dropType = event.dataTransfer.getData("type");
    let index = this.tasks[dropType].indexOf(dropItem);
    this.tasks[type].push(dropItem);
    this.tasks[dropType].splice(index, 1);
  }

  allowDrop(event) {
    event.preventDefault();
  }

  onAddNewTask(event: any) {
    console.log("got event : ", event);
  }
}
