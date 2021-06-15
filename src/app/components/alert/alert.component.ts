import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() type!: string;
  @Input() message!: string;

  constructor(public bsModalRef: BsModalRef) { }


  ngOnInit(): void {
  }

  onClose() {
    this.bsModalRef.hide();
  }


}
