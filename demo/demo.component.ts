import { Component } from '@angular/core';

@Component({
  selector: 'lx-demo-app',
  template: `
    <div class="container-fluid">
      <h3>DateRangePicker</h3>
      <div class="row">
        <div class="col-sm-6">
          <h4>Basic use with ngModel</h4>
          <angular-date-range-picker [(ngModel)]="selectedDateRange"></angular-date-range-picker>
        </div>
        <div class="col-sm-6">
          <h4>Markup</h4>
          <code>&lt;angular-date-range-picker [(ngModel)]="selectedDateRange"&gt;&lt;/angular-date-range-picker&gt;</code>
          <h4>Model value</h4>
          <pre>{{selectedDateRange | json}}</pre>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-6">
          <h4>Advanced use with props</h4>
          <p>Check the full list of available props in the official react-dates repo <a href="https://github.com/airbnb/react-dates/#daterangepicker">here</a>.</p>
          <angular-date-range-picker [(ngModel)]="selectedDateRangeAdv" [props]="dateRangePickerProps" (ngModelChange)="changeDateRangeAdv($event)"></angular-date-range-picker>
        </div>
        <div class="col-sm-6">
          <h4>Markup</h4>
          <code>&lt;angular-date-range-picker [(ngModel)]="selectedDateRangeAdv" [props]="dateRangePickerProps" (ngModelChange)="changeDateRangeAdv($event)"&gt;&lt;/angular-date-range-picker&gt;</code>
          <h4>Props value</h4>
          <pre>{{propsDRP | json}}</pre>
          <h4>Model value</h4>
          <pre>{{selectedDateRangeAdv | json}}</pre>
        </div>
      </div>
      
      <h3>SingleDatePicker</h3>
      <div class="row">
        <div class="col-sm-6">
          <h4>Basic use with ngModel</h4>
          <angular-single-date-picker [(ngModel)]="selectedDate"></angular-single-date-picker>
        </div>
        <div class="col-sm-6">
          <h4>Markup</h4>
          <code>&lt;angular-single-date-picker [(ngModel)]="selectedDate"&gt;&lt;/angular-single-date-picker&gt;</code>
          <h4>Model value</h4>
          <pre>{{selectedDate | json}}</pre>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-6">
          <h4>Advanced use with props</h4>
          <p>Check the full list of available props in the official react-dates repo <a href="https://github.com/airbnb/react-dates/#singledatepicker">here</a>.</p>
          <angular-single-date-picker [(ngModel)]="selectedDateAdv" [props]="singleDatePickerProps" (ngModelChange)="changeDateAdv($event)"></angular-single-date-picker>
        </div>
        <div class="col-sm-6">
          <h4>Markup</h4>
          <code>&lt;angular-single-date-picker [(ngModel)]="selectedDateAdv" [props]="singleDatePickerProps" (ngModelChange)="changeDateAdv($event)"&gt;&lt;/angular-single-date-picker&gt;</code>
          <h4>Props value</h4>
          <pre>{{propsSDP | json}}</pre>
          <h4>Model value</h4>
          <pre>{{selectedDateAdv | json}}</pre>
        </div>
      </div>
    </div>
  `
})
export class DemoComponent {
  // Date range picker
  propsDRP: any;
  selectedDateRange: any;
  selectedDateRangeAdv: any;
  dateRangePickerProps: any;

  // Single date picker
  propsSDP: any;
  selectedDate: Date;
  selectedDateAdv: Date;
  singleDatePickerProps: any;

  constructor() {
    // Date range picker conf
    this.propsDRP = {
      startDatePlaceholderText: 'Desde',
      endDatePlaceholderText: 'Hasta',
      showClearDates: true,
      withPortal: true,
      daySize: 30
    };
    this.dateRangePickerProps = Object.assign({}, this.propsDRP);

    // Single date picker conf
    this.propsSDP = {
      placeholder: 'Fecha',
      showClearDate: true,
      withPortal: true,
      daySize: 30
    };
    this.singleDatePickerProps = Object.assign({}, this.propsSDP);
  }

  changeDateRangeAdv(ev) {
    console.log('Date range changed: %O', ev);
  }

  changeDateAdv(ev) {
    console.log('Date changed: %O', ev);
  }
}
