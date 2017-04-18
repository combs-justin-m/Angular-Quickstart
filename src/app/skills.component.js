"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var skillsComponent = (function () {
    function skillsComponent() {
        this.name = 'Justin';
        this.skills = [{
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
            }];
    }
    return skillsComponent;
}());
skillsComponent = __decorate([
    core_1.Component({
        selector: 'my-skills',
        templateUrl: 'app/skills.component.html',
        styleUrls: ['app/skills.component.css']
    })
], skillsComponent);
exports.skillsComponent = skillsComponent;
//# sourceMappingURL=skills.component.js.map