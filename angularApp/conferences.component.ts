import { Component, OnInit } from '@angular/core';
import { Conference } from '../conference';
// import { Conferences } from '../list-conferences';
import { ConferenceService } from '../conference.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit {
  conferences: Conference [];
    

  constructor(private conferenceService: ConferenceService) { }
  
  ngOnInit() {
    this.getConferences();
    }

  getConferences(): void {
    this.conferenceService.getConferences().subscribe(conferences => this.conferences = conferences);
    }

}
