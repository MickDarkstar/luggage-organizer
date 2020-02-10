import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { IItem, ItemType } from 'src/app/models/item.model';
import { IPerson } from 'src/app/models/person.model';
import { PersonerService } from 'src/app/services/personer.service';
import { ItemsService } from 'src/app/services/items.service';
import { RulesService } from 'src/app/services/rules.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: IItem[];

  constructor(
    private personService: PersonerService,
    private itemService: ItemsService,
    private rulesService: RulesService
  ) {
    this.items = [];
  }

  ngOnInit() {
    this.itemService.items.subscribe(items => {
      this.items = items;
    });
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
      // Todo: Tilldela item.personId = person.id eller item.personId = null beroende på flytt till person eller itemlistan.
    }
  }

  countPersonHandluggage(person: IPerson) {
    return this.rulesService.countPersonHandluggage(person);
  }

  countPersonluggage(person: IPerson) {
    return this.rulesService.countPersonluggage(person);
  }

  countSpecialLuggage(person: IPerson) {
    return this.rulesService.countSpecialLuggage(person);
  }

  countPersonItems(person: IPerson) {
    return this.rulesService.countPersonItems(person);
  }

  private verifyItemsTotalWeight(item: IItem, person: IPerson): boolean {
    return this.rulesService.verifyItemsTotalWeight(item, person);
  }

  private verifyHandluggage(person: IPerson) {
    if (
      this.countPersonHandluggage(person) > this.rulesService.maxPersonHandLuggageCount
    ) {
      alert('Woops!' + person.name + ' har visst för många handbagage');
      return false;
    }
    return true;
  }

  private verifyTotalNoneSpecialItems(person: IPerson) {
    return this.rulesService.verifyTotalNoneSpecialItems(person);
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
}
