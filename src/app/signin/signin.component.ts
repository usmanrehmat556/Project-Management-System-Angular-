import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  onSignIn() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (this.email === "" || this.password === "") {
      console.log("Please Provide the required data.");
    }
    if (this.email !== user.email || this.password !== user.password) {
      console.log("Something went wrong!");
    } else {
      this.router.navigate(["/allprojects"]);
    }
  }
}
