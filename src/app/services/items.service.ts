import { Injectable } from '@angular/core';
import { IItem, ItemType } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  get items() {
    return [
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
  }

  // Mock
  private autoincrementId = 0;

  constructor() { }

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
