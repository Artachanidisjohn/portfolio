import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/Services/theme.service';

@Component({
    selector: 'app-theme-toggle',
    template: `
    <ion-button (click)="onToggle()" fill="clear" 
                [title]="isDarkMode ? 'change to bright theme' : 'change to dark theme'">
        <ion-icon [name]="isDarkMode ? 'sunny' : 'moon'" size="large"></ion-icon>
    </ion-button>
  `,
})
export class ThemeToggleComponent implements OnInit, OnDestroy {

    isDarkMode: boolean;
    themeSubscription: Subscription;

    constructor(private themeService: ThemeService) { }

    ngOnInit() {
        this.themeSubscription = this.themeService.getTheme().subscribe((isDarkMode: boolean) => {
            this.isDarkMode = isDarkMode;
        });
    }

    onToggle() {
        this.themeService.toggleTheme();
    }

    ngOnDestroy() {
        if (this.themeSubscription) {
            this.themeSubscription.unsubscribe();
        }
    }
}
