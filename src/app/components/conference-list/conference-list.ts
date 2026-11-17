import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Conference {
  id: number;
  title: string;
  description: string;
  date: string;
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-conference-list',
  styleUrl: './conference-list.css',
  templateUrl: './conference-list.html',
})
export class ConferenceList {
  searchTerm = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: '',
      date: '2027-11-15',
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: '',
      date: '2027-11-30',
      place: 'Ariana',
      maxParticipants: 100,
      nbParticipants: 94,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: '',
      date: '2027-11-20',
      place: 'Sousse',
      maxParticipants: 100,
      nbParticipants: 100,
    },
  ];

  get filteredConferences(): Conference[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.conferences;
    }

    return this.conferences.filter((conference) => conference.title.toLowerCase().includes(term));
  }

  getRemainingPlaces(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  getRegistrationClass(conference: Conference): string {
    const remainingPlaces = this.getRemainingPlaces(conference);

    if (remainingPlaces <= 0) {
      return 'btn-full';
    }

    if (remainingPlaces < 10) {
      return 'btn-limited';
    }

    return 'btn-available';
  }

  register(conference: Conference): void {
    if (this.getRemainingPlaces(conference) <= 0) {
      return;
    }

    conference.nbParticipants += 1;
  }
}
