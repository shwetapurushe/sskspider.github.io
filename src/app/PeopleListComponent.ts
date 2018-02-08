import {Component, OnInit} from '@angular/core';

import {Person} from './person';
import {PeopleService} from './people.service';


@Component({
    selector: 'app-people-list',
    template : `<ul>
                  <li *ngFor="let person of people">
                   {{person.name}}
                  </li>
  </ul>`

})
export class PeopleListComponent
{
    people : Person[];

    constructor(private peopleService : PeopleService)
    {
        this.people = peopleService.getAll();
    };
    ngOnInit() {};

}
