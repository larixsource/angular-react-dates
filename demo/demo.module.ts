import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularReactDatesModule } from '../src';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    AngularReactDatesModule.forRoot(),
    FormsModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
