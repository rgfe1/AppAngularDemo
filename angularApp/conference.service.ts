import { Injectable } from '@angular/core';
import { Conference } from './conference';
import { Conferences } from './list-conferences';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor(private messageService: MessageService) { }

  getConferences(): Observable<Conference[]> {
    this.messageService.add('ConferenceService: conferences fetched');
    return of (Conferences);
}

getConference(id: number): Observable<Conference> {
  this.messageService.add(`ConferenceService: conference id=${id} fetched`);
  return of(Conferences.find(conference => conference.id === id));
}
}