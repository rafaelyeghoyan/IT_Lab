import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {MorecoursaboutComponent} from "./components/morecoursabout/morecoursabout.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {AdvantagesComponent} from "./components/advantages/advantages.component";
const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:'sign-in',
    component:SignInComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'morecourse',
    component:MorecoursaboutComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'advantages',
    component:AdvantagesComponent
  },
  {
    path:'**',
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
