import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path: "detail/:id", component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
