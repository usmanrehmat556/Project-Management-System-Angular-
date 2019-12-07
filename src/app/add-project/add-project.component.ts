import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

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

  allprojects: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  onChange(lead) {
    this.teamLead = lead;
  }

  addProject() {
    const project: object = {
      title: this.title,
      description: this.description,
      teamLead: this.teamLead,
      selectedMembers: this.selectedMembers
    };
    this.allprojects.push(project);
    localStorage.setItem("projects", JSON.stringify(this.allprojects));
    this.router.navigate(["/allprojects"]);
  }
}
