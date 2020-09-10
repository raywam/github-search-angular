import { Routes } from "@angular/router";
import { HomeModule } from "./home.module";
import { HomeComponent } from "./home.component";

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]