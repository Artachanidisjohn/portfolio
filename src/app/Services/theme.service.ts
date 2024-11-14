<<<<<<< HEAD
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
        return this.isDarkMode.asObservable(); // Επιστρέφουμε Observable για το theme
    }

    private applyTheme(isDarkMode: boolean) {
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
}
=======
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
>>>>>>> 2bd1a5e0b2fc0ddf5a88ab15b68dd0afd29b1dd7
