import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Components/About/about.component';
import { HomeComponent } from './Components/Home/home.component';
import { ContactComponent } from './Components/Contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ThemeToggleComponent } from './Components/Theme-Toggle/theme-toggle.component';
import { ProjectsComponent } from './Components/Projects/project.component';
import { CvComponent } from './Components/Cv/cv.component';
@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, ContactComponent, ThemeToggleComponent, ProjectsComponent, CvComponent],
  imports:
    [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
