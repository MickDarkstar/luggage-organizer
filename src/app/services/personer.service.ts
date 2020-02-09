import { Injectable } from '@angular/core';
import { IPerson } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonerService {
  private _persons: IPerson[];

  get persons() {
    return this._persons;
  }

  set persons(persons: IPerson[]) {
    this._persons = persons;
  }

  constructor() {
    this._persons = [
      {
        id: 1,
        name: 'Emil',
        items: []
      } as IPerson,
      {
        id: 2,
        name: 'Pähr',
        items: []
      } as IPerson,
      {
        id: 3,
        name: 'Dawid',
        items: []
      } as IPerson,
      {
        id: 4,
        name: 'Johan',
        items: []
      } as IPerson,
      {
        id: 5,
        name: 'Jocke',
        items: []
      } as IPerson,
      {
        id: 6,
        name: 'Ylva',
        items: []
      } as IPerson,
      {
        id: 7,
        name: 'Micke',
        items: []
      } as IPerson,
      {
        id: 8,
        name: 'Mats',
        items: []
      } as IPerson
    ] as IPerson[];
  }

  delete(person: IPerson) {
    this.persons = this.persons.filter(x => x.id !== person.id);
  }
}
