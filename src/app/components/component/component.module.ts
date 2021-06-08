import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMensagemFormComponent } from '../v-mensagem-form/v-mensagem-form.component';



@NgModule({
  declarations: [
    VMensagemFormComponent
  ],
  exports: [
    VMensagemFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
