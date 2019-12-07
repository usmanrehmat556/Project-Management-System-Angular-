import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  userData: any[] = [
    {
      id: 1,
      firstName: "muhammad",
      lastName: "usman",
      userName: "usman556",
      role: "admin"
    },
    {
      id: 2,
      firstName: "faizan",
      lastName: "rehmat",
      userName: "faizan556",
      role: "software engineer"
    },
    {
      id: 3,
      firstName: "uamir",
      lastName: "akram",
      role: "technical team lead"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
