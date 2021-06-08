import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-mensagem-form',
  templateUrl: './v-mensagem-form.component.html',
  styleUrls: ['./v-mensagem-form.component.css']
})
export class VMensagemFormComponent implements OnInit {

  @Input() errorMsg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
