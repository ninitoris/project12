import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker-model/worker.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  @Input() worker: MyWorker;
  @Output() changeWorker = new EventEmitter<MyWorker>();

  myWorkerType = MyWorkerType;

  formChanger = new FormGroup({
    firstName: new FormControl()
  });

  constructor(private form_build: FormBuilder, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initGroup();

  }

  initGroup() {
    this.formChanger = this.form_build.group

      ({

        name: new FormControl(this.worker.name, [Validators.required,]),
        surname: new FormControl(this.worker.surname, [Validators.required,]),
        type: new FormControl(this.worker.type, [Validators.required,]),

      })


  }
  change_worker() {
    this.changeWorker.emit({
      id: this.worker.id,
      name: this.formChanger.value.name,
      surname: this.formChanger.value.surname,
      type: this.formChanger.value.type,
    });
  }
}

