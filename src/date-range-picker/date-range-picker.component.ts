import { Component, OnInit, ViewChild, ElementRef, forwardRef, Input } from '@angular/core';
import { DateRangePickerWrapper } from './date-range-picker-wrapper';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'angular-date-range-picker',
  template: '<div #dateRangePicker></div>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true
    }
  ]
})
export class DateRangePickerComponent implements OnInit, ControlValueAccessor {

  // Element reference
  @ViewChild('dateRangePicker')
  dateRangePicker: ElementRef;

  @Input()
  props: any;

  // Dates values
  private dateRange: any;

  //Placeholders for callbacks
  private onTouchedCallback = () => {};
  private onChangeCallback = (_: any) => {};

  constructor() { }

  ngOnInit() {
    // Initialize props if not specified
    if (!this.props) {
      this.props = {};
    }

    // Set some default props
    this.props.ngComponent = this;
    this.props.dateRange = this.dateRange;
  }

  ngAfterViewInit() {
    let container = this.dateRangePicker.nativeElement;
    ReactDOM.render(
      React.createElement(DateRangePickerWrapper, this.props, null),
      container
    );
  }

  get value(): any {
    return this.dateRange;
  };

  set value(v: any) {
    if (v !== this.dateRange) {
      this.dateRange = v;
      this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(rangeModel: any): void {
    if (rangeModel != this.dateRange) {
      // Update this angular component
      this.dateRange = rangeModel;

      // Update react component value
      this.updateReactDateRange(rangeModel);
    }
  }

  updateReactDateRange(dateRange) {
    // Initially empty. This function is replaced when react component is created with its context.
  };

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
