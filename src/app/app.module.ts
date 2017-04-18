import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ExperienceComponent }  from './experience.component';
import { skillsComponent }  from './skills.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ExperienceComponent, skillsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
