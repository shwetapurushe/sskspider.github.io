import { Injectable } from '@angular/core';
import {Person} from './person';

@Injectable()
export class PeopleService {

  constructor() { }


  getAll(): Person[]
  {
    return[
            {name: 'Shweta Purushe', height: 177, weight: 70},
            {name: 'Sameer Padhye', height: 177, weight: 70},
            {name: 'Agastya Padhye', height: 177, weight: 70}
        ];
  }

}
