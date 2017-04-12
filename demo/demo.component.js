"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DemoComponent = (function () {
    function DemoComponent() {
        // Date range picker conf
        this.dateRangePickerProps = {
            startDatePlaceholderText: 'Desde',
            endDatePlaceholderText: 'Hasta',
            showClearDates: true,
            withPortal: true
        };
        // Single date picker conf
        this.singleDatePickerProps = {
            placeholder: 'Fecha',
            showClearDate: true,
            withPortal: true
        };
    }
    DemoComponent.prototype.changeDateRangeAdv = function (ev) {
        console.log('Date range changed: %O', ev);
    };
    DemoComponent.prototype.changeDateAdv = function (ev) {
        console.log('Date changed: %O', ev);
    };
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'lx-demo-app',
            template: "\n    <div class=\"container-fluid\">\n      <h3>DateRangePicker</h3>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h4>Basic use with ngModel</h4>\n          <angular-date-range-picker [(ngModel)]=\"selectedDateRange\"></angular-date-range-picker>\n        </div>\n        <div class=\"col-sm-6\">\n          <h4>Markup</h4>\n          <code>&lt;angular-date-range-picker [(ngModel)]=\"selectedDateRange\"&gt;&lt;/angular-date-range-picker&gt;</code>\n          <h4>Model value</h4>\n          <pre>{{selectedDateRange | json}}</pre>\n        </div>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h4>Advanced use with props</h4>\n          <p>Check the full list of available props in the official react-dates repo <a href=\"https://github.com/airbnb/react-dates/#daterangepicker\">here</a>.</p>\n          <angular-date-range-picker [(ngModel)]=\"selectedDateRangeAdv\" [props]=\"dateRangePickerProps\" (ngModelChange)=\"changeDateRangeAdv($event)\"></angular-date-range-picker>\n        </div>\n        <div class=\"col-sm-6\">\n          <h4>Markup</h4>\n          <code>&lt;angular-date-range-picker [(ngModel)]=\"selectedDateRangeAdv\" [props]=\"dateRangePickerProps\" (ngModelChange)=\"changeDateRangeAdv($event)\"&gt;&lt;/angular-date-range-picker&gt;</code>\n          <h4>Model value</h4>\n          <pre>{{selectedDateRangeAdv | json}}</pre>\n        </div>\n      </div>\n      \n      <h3>SingleDatePicker</h3>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h4>Basic use with ngModel</h4>\n          <angular-single-date-picker [(ngModel)]=\"selectedDate\"></angular-single-date-picker>\n        </div>\n        <div class=\"col-sm-6\">\n          <h4>Markup</h4>\n          <code>&lt;angular-single-date-picker [(ngModel)]=\"selectedDate\"&gt;&lt;/angular-single-date-picker&gt;</code>\n          <h4>Model value</h4>\n          <pre>{{selectedDate | json}}</pre>\n        </div>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h4>Advanced use with props</h4>\n          <p>Check the full list of available props in the official react-dates repo <a href=\"https://github.com/airbnb/react-dates/#singledatepicker\">here</a>.</p>\n          <angular-single-date-picker [(ngModel)]=\"selectedDateAdv\" [props]=\"singleDatePickerProps\" (ngModelChange)=\"changeDateAdv($event)\"></angular-single-date-picker>\n        </div>\n        <div class=\"col-sm-6\">\n          <h4>Markup</h4>\n          <code>&lt;angular-single-date-picker [(ngModel)]=\"selectedDateAdv\" [props]=\"singleDatePickerProps\" (ngModelChange)=\"changeDateAdv($event)\"&gt;&lt;/angular-single-date-picker&gt;</code>\n          <h4>Model value</h4>\n          <pre>{{selectedDateAdv | json}}</pre>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map