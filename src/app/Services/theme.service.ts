import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private isDarkMode = new BehaviorSubject<boolean>(false);

    constructor() {
        const savedTheme = localStorage.getItem('dark-theme');
        if (savedTheme) {
            this.isDarkMode.next(savedTheme === 'true');
        }
        this.applyTheme(this.isDarkMode.value);
    }

    toggleTheme() {
        const newTheme = !this.isDarkMode.value;
        this.isDarkMode.next(newTheme);
        localStorage.setItem('dark-theme', newTheme.toString());
        this.applyTheme(newTheme);
    }

    getTheme() {
        return this.isDarkMode.asObservable(); 
    }

    private applyTheme(isDarkMode: boolean) {
        const root = document.documentElement;
      
        if (isDarkMode) {
          root.style.setProperty('--ion-toolbar-background', '#121212');
          root.style.setProperty('--ion-text-color', '#ffffff');
        } else {
          root.style.setProperty('--ion-toolbar-background', '#f5f5f5');
          root.style.setProperty('--ion-text-color', '#000000');
        }
      }
      
}
