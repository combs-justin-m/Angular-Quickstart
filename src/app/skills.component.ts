import { Component } from '@angular/core';

@Component({
  selector: 'my-skills',
  templateUrl:'app/skills.component.html',
  styleUrls:['app/skills.component.css']
})
export class skillsComponent { 
  name = 'Justin';
  skills = [{
    "title": 'Javascript',
    "description": 'all the scripts'
  },
  {
    "title": 'CSS',
    "description": 'the cascading sorts'
  },
  {
    "title": 'HTML',
    "description": 'markup whalberg'
  }]
}
