import { Component } from "@angular/core";


@Component({
    selector: 'app-projects',
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.scss']
})
export class ProjectsComponent {


    redirectToProject() {
        window.open("https://artachanidis-john-delivery-app.vercel.app/", "_blank");
    }


}