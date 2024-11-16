import { Component } from '@angular/core';
import { ThemeService } from './Services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isDarkMode = false;
  themeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService.getTheme().subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
      this.setTheme(this.isDarkMode);
    });
  }

  toggleTheme(event: any) {
    this.themeService.toggleTheme();
  }

  setTheme(isDarkMode: boolean) {
    document.body.classList.toggle('dark-theme', isDarkMode);
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
