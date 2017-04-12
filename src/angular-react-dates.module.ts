import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleDatePickerComponent } from './single-date-picker/single-date-picker.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';

@NgModule({
  declarations: [
    SingleDatePickerComponent,
    DateRangePickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleDatePickerComponent,
    DateRangePickerComponent
  ]
})
export class AngularReactDatesModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularReactDatesModule
    };
  }

}
