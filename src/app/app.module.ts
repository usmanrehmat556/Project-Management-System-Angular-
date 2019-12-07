import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { AddProjectComponent } from "./add-project/add-project.component";
import { AllProjectsComponent } from "./all-projects/all-projects.component";
import { UsersComponent } from "./users/users.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectComponent } from "./project/project.component";
import { ProjectsComponent } from "./projects/projects.component";

// import { DragDropModule } from "@angular/cdk/drag-drop";

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "addproject", component: AddProjectComponent },
  { path: "allprojects", component: AllProjectsComponent },
  { path: "users", component: UsersComponent },
  { path: "project", component: ProjectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AddProjectComponent,
    AllProjectsComponent,
    UsersComponent,
    ProjectComponent,
    ProjectsComponent
  ],
  imports: [
    // DragDropModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
