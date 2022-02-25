import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/model/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventService: EventService;

  eventList: Event[];

  constructor(eventService: EventService) { 
    this.eventService = eventService;
    this.eventList = this.eventService.getAll();
  }

  ngOnInit(): void {
  }

}
