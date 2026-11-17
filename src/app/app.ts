import { Component } from '@angular/core';
import { ConferenceList } from './components/conference-list/conference-list';
import { Footer } from './components/footer/footer';
import { Friends } from './components/friends/friends';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Notifications } from './components/notifications/notifications';
import { Profile } from './components/profile/profile';

@Component({
  imports: [Header, Navbar, Profile, Friends, Notifications, ConferenceList, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
