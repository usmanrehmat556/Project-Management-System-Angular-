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

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "addproject", component: AddProjectComponent },
  { path: "allprojects", component: AllProjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AddProjectComponent,
    AllProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
