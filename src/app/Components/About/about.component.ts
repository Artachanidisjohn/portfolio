import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/Services/theme.service';

@Component({
    selector: 'app-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss'],
})
export class AboutComponent implements OnInit {

    isDarkMode: boolean;
    themeSubscription: Subscription;

    constructor(
        private themeService: ThemeService,
        private router: Router
    ) { }

    ngOnInit() {
        this.themeSubscription = this.themeService.getTheme().subscribe((isDarkMode: boolean) => {
            this.isDarkMode = isDarkMode;
        });
    }


    goBack() {
        this.router.navigate(['/home']);
    }


    ngOnDestroy() {
        if (this.themeSubscription) {
<<<<<<< HEAD
            this.themeSubscription.unsubscribe(); // Καθαρισμός της εγγραφής όταν το component καταστρέφεται
=======
            this.themeSubscription.unsubscribe(); 
>>>>>>> 2bd1a5e0b2fc0ddf5a88ab15b68dd0afd29b1dd7
        }
    }
}
