import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMensagemFormComponent } from './v-mensagem-form.component';

describe('VMensagemFormComponent', () => {
  let component: VMensagemFormComponent;
  let fixture: ComponentFixture<VMensagemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMensagemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VMensagemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
