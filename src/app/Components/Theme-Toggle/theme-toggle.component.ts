import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/Services/theme.service';

@Component({
    selector: 'app-theme-toggle',
    template: `
    <ion-toggle [checked]="isDarkMode" (ionChange)="onToggle($event)"
                style="--handle-background: {{isDarkMode ? '#ffffff' : '#2196f3'}};">
    </ion-toggle>
  `,
})
export class ThemeToggleComponent {

    isDarkMode: boolean;
    themeSubscription: Subscription;

    constructor(
        private themeService: ThemeService,
    ) {

        this.themeSubscription = this.themeService.getTheme().subscribe((isDarkMode: boolean) => {
            this.isDarkMode = isDarkMode;
        });
    }


    onToggle(event: any) {
        const isChecked = event.detail.checked;
        if (isChecked !== this.isDarkMode) {
            this.themeService.toggleTheme();
        }
    }


    ngOnDestroy() {
        if (this.themeSubscription) {
            this.themeSubscription.unsubscribe();
        }
    }
}
