import { AlertModalService } from './../../../services/alert/alert-modal.service';
import { UserService } from './../../../services/user/user.service';
import { IUser } from './../../../interfaces/i-user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  orderForm!: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private userService: UserService,
    private alertModelService: AlertModalService) { }

  ngOnInit(): void {
    this.orderForm = this.formBuild.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  createUser() {
    if(this.orderForm.valid) {
      const user = this.orderForm.getRawValue() as IUser;
      this.userService.createUser(user).subscribe((response) => {
        this.alertModelService.showAlertSuccess("Usuário criando com sucesso !")
        this.orderForm.reset();
      }, (error => {
        console.log(error)
      }))
    }
  }
}
