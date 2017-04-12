import { Component, OnInit, ViewChild, ElementRef, forwardRef, Input } from '@angular/core';
import { SingleDatePickerWrapper } from './single-date-picker-wrapper';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'angular-single-date-picker',
  template: '<div #singleDatePicker></div>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SingleDatePickerComponent),
      multi: true
    }
  ]
})
export class SingleDatePickerComponent implements OnInit, ControlValueAccessor {

  // Element reference
  @ViewChild('singleDatePicker')
  singleDatePicker: ElementRef;

  @Input()
  props: any;

  // Date value
  private date: any;

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
    this.props.date = this.date;
  }

  ngAfterViewInit() {
    let container = this.singleDatePicker.nativeElement;
    ReactDOM.render(
      React.createElement(SingleDatePickerWrapper, this.props, null),
      container
    );
  }

  get value(): any {
    return this.date;
  };

  set value(v: any) {
    if (v !== this.date) {
      this.date = v;
      this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any): void {
    if (value != this.date) {
      // Update this angular component
      this.date = value;

      // Update react component value
      this.updateReactDate(value);
    }
  }

  updateReactDate(date) {
    // Initially empty. This function is replaced when react component is created with its context.
  };

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
