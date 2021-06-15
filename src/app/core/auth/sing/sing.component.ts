import { UserLogin } from './../../../interfaces/user-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertModalService } from 'src/app/services/alert/alert-modal.service';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.css']
})
export class SingComponent implements OnInit {

  orderForm!: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private authService: AuthService,
    private alertModelService: AlertModalService
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuild.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  isLogin() {
    if(this.orderForm.valid) {
      const user = this.orderForm.getRawValue() as UserLogin;
      this.authService.login(user).subscribe((response) => {
        this.alertErroLogin(response.msg,  response.statusCode)
      }, (error) => {

      })
    }
  }

  alertErroLogin(loginMsg: string, statuCode: number) {
    if(statuCode === 400) {
      this.alertModelService.showAlertDanger(loginMsg)
    }
  }
}
