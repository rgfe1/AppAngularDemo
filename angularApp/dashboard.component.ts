import { Component, OnInit } from '@angular/core';
import { Conference } from '../conference';
import { ConferenceService } from '../conference.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  conferences: Conference[] = [];
 
  constructor(private conferenceService: ConferenceService) { }
 
  ngOnInit() {
    this.getConferences();
  }
 
  getConferences(): void {
    this.conferenceService.getConferences().subscribe(conferences => this.conferences = conferences);
  }
}