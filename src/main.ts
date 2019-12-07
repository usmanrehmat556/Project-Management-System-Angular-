import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from "@angular/core";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
// import { DemoMaterialModule } from "./app/project/material-module";

if (environment.production) {
  enableProdMode();
}

// @NgModule({
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     HttpClientModule,
//     DemoMaterialModule,
//     MatNativeDateModule,
//     ReactiveFormsModule,
//   ],
//   entryComponents: [CdkDragDropOverviewExample],
//   declarations: [CdkDragDropOverviewExample],
//   bootstrap: [CdkDragDropOverviewExample],
//   providers: []
// })

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
