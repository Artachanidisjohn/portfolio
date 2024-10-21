import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Subscription } from "rxjs";
import { ThemeService } from "src/app/Services/theme.service";

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})
export class ContactComponent {

    apiUrl = 'http://localhost:3100';
    // apiUrl = 'http://portfolio-api-ten-ochre.vercel.app';

    name: string = '';
    email: string = '';
    message: string = '';
    messageSent: boolean = false;
    displayMessage: string = '';

    isDarkMode: boolean;
    themeSubscription: Subscription;


    constructor(
        private router: Router,
        private http: HttpClient,
        private themeService: ThemeService,
    ) {

    }

    ngOnInit() {
        this.themeSubscription = this.themeService.getTheme().subscribe((isDarkMode: boolean) => {
            this.isDarkMode = isDarkMode;
        });
    }



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
                    this.messageSent = true;
                    this.displayMessage = 'Το email στάλθηκε επιτυχως!';
                    setTimeout(() => {
                        this.router.navigate(['/']);
                    }, 1200)
                },
                (error) => {
                    console.error('Error sending email', error);
                }
            );
        } else {
            console.log('Please fill in all fields');
        }
    }

    ngOnDestroy() {
        if (this.themeSubscription) {
            this.themeSubscription.unsubscribe();
        }
    }

}
