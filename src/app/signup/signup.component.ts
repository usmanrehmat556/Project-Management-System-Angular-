import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  role: string = "";
  email: string = "";
  password: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  onChange(role) {
    this.role = role;
  }

  onSignUp() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role,
      email: this.email,
      password: this.password
    };
    localStorage.setItem("user", JSON.stringify(user));
    this.router.navigate(["/"]);
  }
}
