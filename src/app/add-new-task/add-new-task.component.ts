import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-new-task",
  templateUrl: "./add-new-task.component.html",
  styleUrls: ["./add-new-task.component.css"]
})
export class AddNewTaskComponent implements OnInit {
  @Output() addNewTask = new EventEmitter();

  title: string = "";
  hours: number = 0;
  date: string = "";
  description: string = "";
  assignedTo: string = "";
  status: string = "";

  constructor() {}

  ngOnInit() {}

  onChange(value, type) {
    if (type === "assignedTo") {
      this.assignedTo = value;
    } else {
      this.status = value;
    }
  }

  addTask() {
    const task = {
      title: this.title,
      hours: this.hours,
      date: this.date,
      description: this.description,
      assignedTo: this.assignedTo,
      status: this.status
    };
    console.log(task);
    this.addNewTask.emit(task);
  }
}
