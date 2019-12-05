import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-projects",
  templateUrl: "./all-projects.component.html",
  styleUrls: ["./all-projects.component.css"]
})
export class AllProjectsComponent implements OnInit {
  allProjects: any = [];
  constructor(private router: Router) {
    this.allProjects = JSON.parse(localStorage.getItem("projects"));
  }

  ngOnInit() {}

  navigate() {
    this.router.navigate(["/addproject"]);
  }
}
