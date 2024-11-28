import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Subscription } from "rxjs";
import { ThemeService } from "src/app/Services/theme.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})
export class ContactComponent {

    // apiUrl = 'http://localhost:3100';
    apiUrl = 'https://portfolio-api-ten-ochre.vercel.app';

    userForm!: FormGroup;

    messageSent: boolean = false;
    displayMessage: string = '';

    isDarkMode: boolean;
    themeSubscription: Subscription;
    showErrors = false;

    constructor(
        private router: Router,
        private http: HttpClient,
        private themeService: ThemeService,
        private fb: FormBuilder
    ) {

    }

    ngOnInit() {
        this.themeSubscription = this.themeService.getTheme().subscribe((isDarkMode: boolean) => {
            this.isDarkMode = isDarkMode;
        });


        this.userForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required]]
        });


        this.userForm.valueChanges.subscribe(() => {
            if (this.userForm.valid) {
                this.showErrors = false;
            }
        });
    }




    goBack() {
        this.router.navigate(['/']);
    }

    sendMessage() {
        if (this.userForm.valid) {
            const formData = this.userForm.value;

            this.http.post(`${this.apiUrl}/send-email`, formData).subscribe(
                (response) => {
                    console.log('Email sent successfully', response);
                    this.messageSent = true;
                    this.displayMessage = 'The email was sent successfully!';
                    setTimeout(() => {
                        this.router.navigate(['/']);
                    }, 1200);
                },
                (error) => {
                    console.error('Error sending email', error);
                }
            );
        } else {
            Object.keys(this.userForm.controls).forEach((field) => {
                const control = this.userForm.get(field);
                control?.markAsTouched({ onlySelf: true });
            });

        }
    }


    ngOnDestroy() {
        if (this.themeSubscription) {
            this.themeSubscription.unsubscribe();
        }
    }

}
