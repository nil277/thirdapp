import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArCompComponent } from './ar-comp/ar-comp.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path : 'home',component: HomeComponent},
  {path : 'course',component: CourseComponent}, 
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'array', component: ArCompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
