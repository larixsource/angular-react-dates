import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, forwardRef, Input } from '@angular/core';
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
export class DateRangePickerComponent implements OnInit, ControlValueAccessor, AfterViewInit {

  // Element reference
  @ViewChild('dateRangePicker')
  dateRangePicker: ElementRef;

  @Input()
  props: any;

  // Dates values
  private dateRange: any;

  ngOnInit(): void {
    // Initialize props if not specified
    if (!this.props) {
      this.props = {};
    }

    // Set some default props
    this.props.ngComponent = this;
    this.props.dateRange = this.dateRange;
  }

  ngAfterViewInit(): void {
    let container: any = this.dateRangePicker.nativeElement;
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

  onBlur(): void {
    this.onTouchedCallback();
  }

  writeValue(rangeModel: any): void {
    if (rangeModel !== this.dateRange) {
      // Update this angular component
      this.dateRange = rangeModel;

      // Update react component value
      this.updateReactDateRange(rangeModel);
    }
  }

  updateReactDateRange(dateRange: any): void {
    // Initially empty. This function is replaced when react component is created with its context.
  };

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  onTouchedCallback(): void {
    //Placeholders for callback
  }

  onChangeCallback(_: any): void {
    //Placeholders for callback
  }

}
