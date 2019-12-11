import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { v4 as uuid } from "uuid";

@Component({
  selector: "app-add-project",
  templateUrl: "./add-project.component.html",
  styleUrls: ["./add-project.component.css"]
})
export class AddProjectComponent implements OnInit {
  title: string = "";
  description: string = "";
  teamLead: string = "";
  members: string[] = ["usman", "ghani", "umer", "hamza"];
  selectedMembers: string[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  onChange(lead) {
    this.teamLead = lead;
  }

  addProject() {
    let all_projects = JSON.parse(localStorage.getItem("projects"));
    all_projects = all_projects ? all_projects : [];
    const project = {
      id: uuid(),
      title: this.title,
      description: this.description,
      teamLead: this.teamLead,
      selectedMembers: this.selectedMembers
    };
    all_projects.push(project);
    localStorage.setItem("projects", JSON.stringify(all_projects));
    this.router.navigate(["/allprojects"]);
  }
}
