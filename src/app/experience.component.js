"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ExperienceComponent = (function () {
    function ExperienceComponent() {
        this.jobs = [{
                title: 'Javascript Developer',
                company: 'The Home Depot - Contractor',
                hire: '2015SEP01',
                description: 'Lorem ips. Aliquam id tortor eget urna vehicula finibus sed eget dolor. In tempor vulputate mauris.'
            },
            {
                title: 'Software Engineer',
                company: 'The Home Depot',
                hire: '2015DEC01',
                description: 'Phasellus ante eros, ultrices ut neque ac, vestibulum auctor elit.'
            }, {
                title: 'Computational Designer',
                company: 'TBD',
                hire: '2018JAN01',
                description: 'Pellentesque placerat luctus lacus, ultrices congue tortor vestibulum non.'
            }];
    }
    return ExperienceComponent;
}());
ExperienceComponent = __decorate([
    core_1.Component({
        selector: 'my-xp',
        templateUrl: 'app/experience.component.html',
        styleUrl: ['app/experience.component.css']
    })
], ExperienceComponent);
exports.ExperienceComponent = ExperienceComponent;
//# sourceMappingURL=experience.component.js.map