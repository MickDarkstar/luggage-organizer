import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPerson } from 'src/app/models/person.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  formGroup: FormGroup;
  id = new FormControl();
  name = new FormControl();
  formBuilder: any;
  private _person = new Subject<IPerson>();

  @Input()
  set person(person: IPerson) {
    if (person && person.name) {
      person.name.trim();
      this._person.next(person);
    } else {
      this._person.next(null);
    }
  }

  @Output() output = new EventEmitter<IPerson>();

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.formGroup = formBuilder.group({
      id: this.id,
      name: this.name
    });
  }

  ngOnInit() {
    this._person.subscribe(person => {
      const id = (person && person.id) ? person.id : 0;
      const name = (person && person.name) ? person.name : '';
      this.formGroup = this.formBuilder.group({
        id: this.id = new FormControl(id),
        name: this.name = new FormControl(name)
      });
    });
    this.init();
  }

  init() {
    this._person.next({} as IPerson);
  }

  onSubmit(person) {
    this.output.emit(person);

    this.init();
  }
}
