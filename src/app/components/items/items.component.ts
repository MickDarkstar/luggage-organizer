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
    this.items = this.itemsService.items;
  }

  remove(item: IItem) {
    this.itemsService.delete(item);
    this.items = this.itemsService.items;
  }
}
