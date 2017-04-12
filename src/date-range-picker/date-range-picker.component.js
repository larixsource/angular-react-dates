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
var date_range_picker_wrapper_1 = require('./date-range-picker-wrapper');
var forms_1 = require('@angular/forms');
var React = require('react');
var ReactDOM = require('react-dom');
var DateRangePickerComponent = (function () {
    function DateRangePickerComponent() {
    }
    DateRangePickerComponent.prototype.ngOnInit = function () {
        // Initialize props if not specified
        if (!this.props) {
            this.props = {};
        }
        // Set some default props
        this.props.ngComponent = this;
        this.props.dateRange = this.dateRange;
    };
    DateRangePickerComponent.prototype.ngAfterViewInit = function () {
        var container = this.dateRangePicker.nativeElement;
        ReactDOM.render(React.createElement(date_range_picker_wrapper_1.DateRangePickerWrapper, this.props, null), container);
    };
    Object.defineProperty(DateRangePickerComponent.prototype, "value", {
        get: function () {
            return this.dateRange;
        },
        set: function (v) {
            if (v !== this.dateRange) {
                this.dateRange = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    DateRangePickerComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    DateRangePickerComponent.prototype.writeValue = function (rangeModel) {
        if (rangeModel !== this.dateRange) {
            // Update this angular component
            this.dateRange = rangeModel;
            // Update react component value
            this.updateReactDateRange(rangeModel);
        }
    };
    DateRangePickerComponent.prototype.updateReactDateRange = function (dateRange) {
        // Initially empty. This function is replaced when react component is created with its context.
    };
    ;
    DateRangePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DateRangePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DateRangePickerComponent.prototype.onTouchedCallback = function () {
        //Placeholders for callback
    };
    DateRangePickerComponent.prototype.onChangeCallback = function (_) {
        //Placeholders for callback
    };
    __decorate([
        core_1.ViewChild('dateRangePicker'), 
        __metadata('design:type', core_1.ElementRef)
    ], DateRangePickerComponent.prototype, "dateRangePicker", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateRangePickerComponent.prototype, "props", void 0);
    DateRangePickerComponent = __decorate([
        core_1.Component({
            selector: 'angular-date-range-picker',
            template: '<div #dateRangePicker></div>',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return DateRangePickerComponent; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DateRangePickerComponent);
    return DateRangePickerComponent;
}());
exports.DateRangePickerComponent = DateRangePickerComponent;
//# sourceMappingURL=date-range-picker.component.js.map