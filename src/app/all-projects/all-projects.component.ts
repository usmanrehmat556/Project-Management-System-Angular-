import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-projects",
  templateUrl: "./all-projects.component.html",
  styleUrls: ["./all-projects.component.css"]
})
export class AllProjectsComponent implements OnInit {
  display = "none";
  storyOne: string = "";
  storyTwo: string = "";
  storyThree: string = "";
  allProject: any = [];
  projectId: string;
  constructor(private router: Router) {
    this.allProject = JSON.parse(localStorage.getItem("projects"));
  }

  openModal() {
    this.display = "block";
  }

  onClosedHandled() {
    this.display = "none";
  }

  ngOnInit() {}

  navigate() {
    this.router.navigate(["/addproject"]);
  }

  alertIndex(e) {
    console.log(e);
  }

  getId(id) {
    this.projectId = id;
    return;
  }

  onAdd(projectId?: any) {
    // const addedStories = {
    //   storyOne: this.storyOne ? this.storyOne : undefined,
    //   storyTwo: this.storyTwo ? this.storyTwo : undefined,
    //   storyThree: this.storyThree ? this.storyThree : undefined
    // };
    const addedStories = [this.storyOne, this.storyTwo, this.storyThree];
    const projects = JSON.parse(localStorage.getItem("projects"));
    const project = projects.filter(el => el.id === this.projectId)[0];
    project["stories"] = addedStories;

    localStorage.setItem("project", JSON.stringify(project));

    this.router.navigate(["/project"]);
  }

  onAddStory() {}
}
