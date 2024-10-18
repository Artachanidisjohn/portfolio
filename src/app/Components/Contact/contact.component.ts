import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})
export class ContactComponent {


    apiUrl = 'http://localhost:3100';
    
    // apiUrl = 'https://portfolio-angular-ionic-node-js-kvo6-k0pzp7vzf.vercel.app';



    name: string = '';
    email: string = '';
    message: string = '';

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }


    goBack() {
        this.router.navigate(['/']);
    }


    sendMessage() {
        if (this.name && this.email && this.message) {
            const formData = {
                name: this.name,
                email: this.email,
                message: this.message,
            };


            this.http.post(`${this.apiUrl}/send-email`, formData).subscribe(
                (response) => {
                    console.log('Email sent successfully', response);
                },
                (error) => {
                    console.error('Error sending email', error);
                }
            );
        } else {
            console.log('Please fill in all fields');
        }
    }

}


