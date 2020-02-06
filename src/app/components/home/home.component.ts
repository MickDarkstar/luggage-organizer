import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { IItem, ItemType } from 'src/app/models/item.model';
import { IPerson } from 'src/app/models/person.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private autoincrementId = 1;
  items: IItem[];
  persons: IPerson[];

  // Gränsvärden
  thresholdPersonItemCount: any;

  thresholdPersonHandLuggageCount: any;
  thresholdHandLuggageTotalMaxWeight: any;

  thresholdLuggagePerPerson: any;
  thresholhLuggagePerPersonMaxWeight: any;

  thresholdSpecialLuggagePerPerson: any;
  thresholdSpecialLuggagePerPersonMaxWeight: any;

  constructor() {
    this.items = [];
    this.persons = [];
  }

  ngOnInit() {
    this.items = [
      this.mockItem('Handsväska', ItemType.HandLuggage, 8),
      this.mockItem('Handsväska Dator', ItemType.HandLuggage, 2),
      this.mockItem('Handsväska Dator', ItemType.HandLuggage, 2),
      this.mockItem('Handsväska', ItemType.HandLuggage, 4),
      this.mockItem('Handsväska', ItemType.HandLuggage, 5),
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
    this.mockPersons();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  countPersonHandluggage(person: IPerson) {
    const counted = person.items.filter(x => x.type === ItemType.HandLuggage)
      .length;
    return counted;
  }

  countPersonluggage(person: IPerson) {
    return person.items.filter(x => x.type === ItemType.Luggage).length;
  }

  countSpecialLuggage(person: IPerson) {
    return person.items.filter(x => x.type === ItemType.SpecialLuggage).length;
  }

  countPersonItems(person: IPerson) {
    return person.items.length;
  }

  private verifyItemsTotalWeight(item: IItem, person: IPerson): boolean {
    let handLuggageTotalWeight = 0;
    if (item.type === ItemType.HandLuggage) {
      handLuggageTotalWeight += item.weight;
    }
    if (handLuggageTotalWeight > this.thresholdHandLuggageTotalMaxWeight) {
      alert(
        'Woops!' +
        person.name +
        's handbagage med nr ' +
        item.number +
        ' väger för mycket'
      );
      return false;
    }
    return true;
  }

  private verifyHandluggage(person: IPerson) {
    if (
      this.countPersonHandluggage(person) > this.thresholdPersonHandLuggageCount
    ) {
      alert('Woops!' + person.name + ' har visst för många handbagage');
      return false;
    }
    return true;
  }

  private verifyTotalNoneSpecialItems(person: IPerson) {
    let counted = 0;
    person.items.forEach(item => {
      if (item.type !== ItemType.SpecialLuggage) {
        counted++;
      }
    });
    if (counted > this.thresholdPersonItemCount) {
      const diff = counted - this.thresholdPersonItemCount;
      alert(
        'Woops!' + person.name + ' har ' + diff + ' mer än tillåtna kollin'
      );
      return false;
    }
    return true;
  }

  private sumWeightPersonItems(person: IPerson) {
    let sum = 0;
    if (person.items.length > 0) {
      person.items.forEach(x => {
        sum += x.weight;
      });
    }
    return sum;
  }

  private sumTotalWeightPersonsItems(persons: IPerson[]) {
    const totalSum = persons.reduce(function(acc, cur) {
      return this.sumWeightPersonItems(acc) + this.sumWeightPersonItems(cur);
    });
    return totalSum;
  }

  private mockPersons() {
    this.persons = [
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
