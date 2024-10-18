import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: 'app-skills',
    templateUrl: 'skills.component.html',
    styleUrls: ['skills.component.scss']
})
export class SkillsComponent {

    constructor(
        private router: Router
    ) { }



    skillsFrontEnd = ['angular', 'ionic', 'html', 'css', 'javascript'];
    skillsBackEnd = ['node.js', 'express.js', 'sequalize'];


    goBack() {
        this.router.navigate(['/']);
    }
}