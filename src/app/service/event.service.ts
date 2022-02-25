import { Injectable } from '@angular/core';
import { Event } from 'src/model/event';
import { Location } from 'src/model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      new Event("name1", "date1", "time1", new Location("address1", "city1", "country1")),
      new Event("name2", "date2", "time2", new Location("address2", "city1", "country1")),
      new Event("name3", "date3", "time3", new Location("address2", "city2", "country1"))
    ];
  }
}
