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
var common_1 = require('@angular/common');
var single_date_picker_component_1 = require('./single-date-picker/single-date-picker.component');
var date_range_picker_component_1 = require('./date-range-picker/date-range-picker.component');
var AngularReactDatesModule = (function () {
    function AngularReactDatesModule() {
    }
    AngularReactDatesModule.forRoot = function () {
        return {
            ngModule: AngularReactDatesModule
        };
    };
    AngularReactDatesModule = __decorate([
        core_1.NgModule({
            declarations: [
                single_date_picker_component_1.SingleDatePickerComponent,
                date_range_picker_component_1.DateRangePickerComponent
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [
                single_date_picker_component_1.SingleDatePickerComponent,
                date_range_picker_component_1.DateRangePickerComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AngularReactDatesModule);
    return AngularReactDatesModule;
}());
exports.AngularReactDatesModule = AngularReactDatesModule;
//# sourceMappingURL=angular-react-dates.module.js.map