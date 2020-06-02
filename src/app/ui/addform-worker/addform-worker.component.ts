import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker-model/worker.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;


  form_workers: FormGroup;

  @Input() name_edit: string;
  @Input() surname_edit: string;

  @Output() addWorker = new EventEmitter<MyWorker>();

  // @Output() changeWorker = new EventEmitter<MyWorker>();


  constructor(private form_build: FormBuilder) {


  }

  ngOnInit() {

    this.initForm();

  }

  initForm() {

    this.form_workers = this.form_build.group

      ({

        name: new FormControl("", [Validators.required,]),
        surname: new FormControl("", [Validators.required,]),
      })
  }

  onAddWorker() {
    this.addWorker.emit({
      name: this.form_workers.value.name,
      surname: this.form_workers.value.surname,
      type: this.type,
    });
    this.name_edit = this.form_workers.value.name;
  }
}
