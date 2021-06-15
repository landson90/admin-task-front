import { AlertComponent } from './../../components/alert/alert.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) {}

  private showAlert(message: string, type: AlertTypes) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS);
  }
}
