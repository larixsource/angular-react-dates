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
var single_date_picker_wrapper_1 = require('./single-date-picker-wrapper');
var forms_1 = require('@angular/forms');
var React = require('react');
var ReactDOM = require('react-dom');
var SingleDatePickerComponent = (function () {
    function SingleDatePickerComponent() {
    }
    SingleDatePickerComponent.prototype.ngOnInit = function () {
        // Initialize props if not specified
        if (!this.props) {
            this.props = {};
        }
        // Set some default props
        this.props.ngComponent = this;
        this.props.date = this.date;
    };
    SingleDatePickerComponent.prototype.ngAfterViewInit = function () {
        var container = this.singleDatePicker.nativeElement;
        ReactDOM.render(React.createElement(single_date_picker_wrapper_1.SingleDatePickerWrapper, this.props, null), container);
    };
    Object.defineProperty(SingleDatePickerComponent.prototype, "value", {
        get: function () {
            return this.date;
        },
        set: function (v) {
            if (v !== this.date) {
                this.date = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    SingleDatePickerComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    SingleDatePickerComponent.prototype.writeValue = function (value) {
        if (value !== this.date) {
            // Update this angular component
            this.date = value;
            // Update react component value
            this.updateReactDate(value);
        }
    };
    SingleDatePickerComponent.prototype.updateReactDate = function (date) {
        // Initially empty. This function is replaced when react component is created with its context.
    };
    ;
    SingleDatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SingleDatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SingleDatePickerComponent.prototype.onTouchedCallback = function () {
        //Placeholders for callback
    };
    SingleDatePickerComponent.prototype.onChangeCallback = function (_) {
        //Placeholders for callback
    };
    __decorate([
        core_1.ViewChild('singleDatePicker'), 
        __metadata('design:type', core_1.ElementRef)
    ], SingleDatePickerComponent.prototype, "singleDatePicker", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SingleDatePickerComponent.prototype, "props", void 0);
    SingleDatePickerComponent = __decorate([
        core_1.Component({
            selector: 'angular-single-date-picker',
            template: '<div #singleDatePicker></div>',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SingleDatePickerComponent; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SingleDatePickerComponent);
    return SingleDatePickerComponent;
}());
exports.SingleDatePickerComponent = SingleDatePickerComponent;
//# sourceMappingURL=single-date-picker.component.js.map