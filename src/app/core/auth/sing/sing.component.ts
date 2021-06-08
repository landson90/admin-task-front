import { UserLogin } from './../../../interfaces/user-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.css']
})
export class SingComponent implements OnInit {

  orderForm!: FormGroup;

  constructor(
    private formBuild: FormBuilder
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuild.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  isLogin() {
    const user = this.orderForm.getRawValue() as UserLogin;

  }

}
