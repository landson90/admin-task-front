import { ComponentModule } from './../../components/component/component.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SingComponent } from './sing/sing.component';
import { SingupComponent } from './singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    SingComponent,
    SingupComponent

  ],

  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule
  ]
})
export class AuthModule { }
