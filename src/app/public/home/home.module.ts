import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { Div1Component } from './div1/div1.component';
import { Div2Component } from './div2/div2.component';
import { Div3Component } from './div3/div3.component';
import { Div4Component } from './div4/div4.component';


@NgModule({
  declarations: [HomeComponent, Div1Component, Div2Component, Div3Component, Div4Component],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
