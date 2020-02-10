import { Injectable } from '@angular/core';
import { IItem, ItemType } from '../models/item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // private _items: IItem[];
  private _items = new BehaviorSubject<IItem[]>([]);
  private dataStore: { items: IItem[] } = { items: [] as IItem[] };

  get items() {
    return this._items.asObservable();
  }

  // set items(items: IItem[]) {
  //   this._items = items;
  // }

  // Mock
  private autoincrementId = 0;

  constructor() {
    const mockData = [
      this.mockItem('Handväska', ItemType.HandLuggage, 8),
      this.mockItem('Handväska Dator', ItemType.HandLuggage, 2),
      this.mockItem('Handväska Dator', ItemType.HandLuggage, 2),
      this.mockItem('Handväska', ItemType.HandLuggage, 4),
      this.mockItem('Handväska', ItemType.HandLuggage, 5),
      this.mockItem('Ryggsäck', ItemType.HandLuggage, 8),
      this.mockItem('Resväska', ItemType.Luggage, 20),
      this.mockItem('Resväska', ItemType.Luggage, 23),
      this.mockItem('Resväska', ItemType.Luggage, 20),
      this.mockItem('Resväska', ItemType.Luggage, 13),
      this.mockItem('Resväska', ItemType.Luggage, 20),
      this.mockItem('Resväska', ItemType.Luggage, 20),
      this.mockItem('Case', ItemType.SpecialLuggage, 0),
      this.mockItem('Case', ItemType.SpecialLuggage, 0),
      this.mockItem('Case', ItemType.SpecialLuggage, 0),
      this.mockItem('Case', ItemType.SpecialLuggage, 0),
      this.mockItem('Case', ItemType.SpecialLuggage, 0)
    ] as IItem[];

    this.dataStore.items = mockData;
    this.updateLocalDataStore();
  }

  save(item: IItem) {
    if (this.dataStore.items.some(x => x.id === item.id)) {
      this.dataStore.items.map(x => {
        if (x.id === item.id) {
          x.name = item.name;
        }
      });
      this.updateLocalDataStore();
    } else {
      item.id = this.dataStore.items.length + 1;
      this.dataStore.items = [...this.dataStore.items, item];
      this.updateLocalDataStore();
    }
  }

  delete(item: IItem) {
    this.dataStore.items = this.dataStore.items.filter(x => x.id !== item.id);
    this.updateLocalDataStore();
  }

  private updateLocalDataStore() {
    this._items.next(Object.assign({}, this.dataStore).items);
  }

  private mockItem(name: string, luggageType: ItemType, weight: number) {
    this.autoincrementId++;
    return {
      id: this.autoincrementId,
      name,
      number: this.autoincrementId,
      type: luggageType,
      weight
    } as IItem;
  }
}
