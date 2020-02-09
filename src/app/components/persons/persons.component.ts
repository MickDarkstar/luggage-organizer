import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/models/person.model';
import { PersonerService } from 'src/app/services/personer.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  persons: IPerson[];
  displayedColumns: string[] = ['id', 'name', 'delete'];

  constructor(
    private personsService: PersonerService
  ) {
    this.persons = [];
  }

  ngOnInit() {
    this.persons = this.personsService.persons;
  }

  remove(person: IPerson) {
    this.personsService.delete(person);
    this.persons = this.personsService.persons;
  }
}
