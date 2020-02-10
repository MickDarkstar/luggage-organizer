import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/models/person.model';
import { PersonerService } from 'src/app/services/personer.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  selectedPerson: IPerson;
  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];

  constructor(
    private personsService: PersonerService
  ) {
    this.selectedPerson = null;
  }

  ngOnInit() {
  }

  handleOutput(person: IPerson) {
    person.items = [];
    person.order = 0;
    this.personsService.save(person);
    this.selectedPerson = null;
  }

  edit(person: IPerson) {
    this.selectedPerson = person;
  }

  remove(person: IPerson) {
    this.personsService.delete(person);
  }
}
