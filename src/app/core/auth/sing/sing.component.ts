import { UserLogin } from './../../../interfaces/user-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.css']
})
export class SingComponent implements OnInit {

  orderForm!: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private authService: AuthService
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
        console.log(response.msg)
      }, (error) => {
        console.log(error)
      })
    }
  }

}
