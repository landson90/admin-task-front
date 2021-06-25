import { BreadcrumbComponent } from './../breadcrumb/breadcrumb.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuComponent } from '../menu/menu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    NavBarComponent,
    MenuComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule
  ],
  exports: [
    NavBarComponent,
    MenuComponent,
    BreadcrumbComponent
  ]


})
export class SharedModule { }
