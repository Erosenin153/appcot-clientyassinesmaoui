import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-notifications',
  styleUrl: './notifications.css',
  templateUrl: './notifications.html',
})
export class Notifications {
  showNotifications = false;

  notifications = [
    'Votre inscription à Angular 21 Conference est confirmée.',
    'Une nouvelle conférence est disponible.',
  ];

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }
}
