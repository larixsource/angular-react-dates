import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, forwardRef, Input } from '@angular/core';
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
export class SingleDatePickerComponent implements OnInit, ControlValueAccessor, AfterViewInit {

  // Element reference
  @ViewChild('singleDatePicker')
  singleDatePicker: ElementRef;

  @Input()
  props: any;

  // Date value
  private date: any;

  ngOnInit(): void {
    // Initialize props if not specified
    if (!this.props) {
      this.props = {};
    }

    // Set some default props
    this.props.ngComponent = this;
    this.props.date = this.date;
  }

  ngAfterViewInit(): void {
    let container: any = this.singleDatePicker.nativeElement;
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

  onBlur(): void {
    this.onTouchedCallback();
  }

  writeValue(value: any): void {
    if (value !== this.date) {
      // Update this angular component
      this.date = value;

      // Update react component value
      this.updateReactDate(value);
    }
  }

  updateReactDate(date: any): void {
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
