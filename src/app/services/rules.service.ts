import { Injectable } from '@angular/core';
import { ItemType, IItem } from '../models/item.model';
import { IPerson } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  maxPersonItemCount: any;

  maxPersonHandLuggageCount: any;
  maxHandLuggageTotalMaxWeight: any;

  maxLuggagePerPerson: any;
  maxLuggagePerPersonMaxWeight: any;

  maxSpecialLuggagePerPerson: any;
  maxSpecialLuggagePerPersonMaxWeight: any;

  constructor() { }

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

  verifyTotalNoneSpecialItems(person: IPerson) {
    let counted = 0;
    person.items.forEach(item => {
      if (item.type !== ItemType.SpecialLuggage) {
        counted++;
      }
    });
    if (counted > this.maxPersonItemCount) {
      const diff = counted - this.maxPersonItemCount;
      alert(
        'Woops!' + person.name + ' har ' + diff + ' mer än tillåtna kollin'
      );

      // Todo: return IValidation { ok: false, message: ""}
      return false;
    }
    // Todo: return IValidation { ok: false, message: ""}
    return true;
  }

  verifyItemsTotalWeight(item: IItem, person: IPerson) {
    let handLuggageTotalWeight = 0;
    if (item.type === ItemType.HandLuggage) {
      handLuggageTotalWeight += item.weight;
    }
    if (handLuggageTotalWeight > this.maxHandLuggageTotalMaxWeight) {
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
      this.countPersonHandluggage(person) > this.maxPersonHandLuggageCount
    ) {
      alert('Woops!' + person.name + ' har visst för många handbagage');
      return false;
    }
    return true;
  }
}
