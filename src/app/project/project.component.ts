import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
  dataTransfer: any;
  tasks = {
    completed: ["abc", "cde", "def"];
    progress: ["efg", "hij", "klm"];
  };
  constructor() {}

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

}
