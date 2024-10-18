import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/About/about.component';
import { HomeComponent } from './Components/Home/home.component';
import { SkillsComponent } from './Components/Skills/skills.component';
import { ContactComponent } from './Components/Contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
