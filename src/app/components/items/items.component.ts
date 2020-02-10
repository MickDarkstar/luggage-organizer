import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: IItem[];
  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'number',
    'weight',
    'delete'
  ];

  constructor(
    private itemsService: ItemsService
  ) {
    this.items = [];
  }

  ngOnInit() {
    // Todo: använd en separat lista för att ha koll på items som ännu ej tilldelats till person
    // Todo: kontrollera vilka items som är tilldelade till person
    // this.itemsService.items
  }

  save(item: IItem) {
    this.itemsService.save(item);
  }

  remove(item: IItem) {
    this.itemsService.delete(item);
  }
}
