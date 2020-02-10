import { Injectable } from '@angular/core';
import { IPerson } from '../models/person.model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonerService {
  private _persons = new BehaviorSubject<IPerson[]>([]);
  private dataStore: { personer: IPerson[] } = { personer: [] as IPerson[] };

  get persons() {
    return this._persons.asObservable();
  }

  constructor() {
    const mockData = [
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

    this.dataStore.personer = mockData;
    this.updateLocalDataStore();
  }

  save(person: IPerson) {
    if (this.dataStore.personer.some(x => x.id === person.id)) {
      this.dataStore.personer.map(x => {
        if (x.id === person.id) {
          x.name = person.name;
        }
      });
      this.updateLocalDataStore();
    } else {
      person.id = this.dataStore.personer.length + 1;
      this.dataStore.personer = [...this.dataStore.personer, person];
      this.updateLocalDataStore();
    }
  }

  delete(person: IPerson) {
    this.dataStore.personer = this.dataStore.personer.filter(item => item.id !== person.id);
    this.updateLocalDataStore();
  }

  private updateLocalDataStore() {
    this._persons.next(Object.assign({}, this.dataStore).personer);
  }
}
