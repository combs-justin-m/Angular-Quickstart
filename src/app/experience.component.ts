import { Component } from '@angular/core';

@Component({
    selector:'my-xp',
    templateUrl:'app/experience.component.html',
    styleUrl:['app/experience.component.css']
})

export class ExperienceComponent { 
    jobs = [{
        title:'Javascript Developer',
        company:'The Home Depot - Contractor',
        hire: '2015SEP01', 
        description:'Lorem ips. Aliquam id tortor eget urna vehicula finibus sed eget dolor. In tempor vulputate mauris.'
    },
    {
        title:'Software Engineer',
        company:'The Home Depot',
        hire: '2015DEC01', 
        description:'Phasellus ante eros, ultrices ut neque ac, vestibulum auctor elit.'
    },{
        title:'Computational Designer',
        company:'TBD',
        hire: '2018JAN01', 
        description:'Pellentesque placerat luctus lacus, ultrices congue tortor vestibulum non.'        
    }];
}