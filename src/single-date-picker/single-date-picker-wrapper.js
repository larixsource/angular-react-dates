"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_dates_1 = require('react-dates');
var moment = require('moment');
var SingleDatePickerWrapper = (function (_super) {
    __extends(SingleDatePickerWrapper, _super);
    function SingleDatePickerWrapper(props) {
        _super.call(this, props);
        // React component state
        this.state = this.createState();
        // Bindings to angular context
        this.ngComponent = props.ngComponent;
        this.ngComponent.updateReactDate = this.updateReactDateFromNg;
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.ngComponent.updateReactDate = this.ngComponent.updateReactDate.bind(this);
    }
    SingleDatePickerWrapper.prototype.updateReactDateFromNg = function (date) {
        // Update date
        var newDate = date ? moment(date) : null;
        this.onDateChange(newDate);
    };
    SingleDatePickerWrapper.prototype.onDateChange = function (date) {
        // Update this react component state
        this.setState({ date: date });
        // Update angular component container state
        this.ngComponent.value = date ? date.toDate() : null;
    };
    SingleDatePickerWrapper.prototype.onFocusChange = function (_a) {
        var focused = _a.focused;
        this.setState({ focused: focused });
    };
    SingleDatePickerWrapper.prototype.createState = function () {
        return {
            date: this.props.date ? moment(this.props.date) : null,
            focused: (this.props.focused != null) ? this.props.focused : false
        };
    };
    SingleDatePickerWrapper.prototype.render = function () {
        var conf = {
            // Required
            date: this.state.date,
            onDateChange: this.onDateChange,
            focused: this.state.focused,
            onFocusChange: this.onFocusChange,
            // Optional
            id: this.props.id,
            placeholder: this.props.placeholder,
            disabled: this.props.disabled,
            required: this.props.required,
            screenReaderInputMessage: this.props.screenReaderInputMessage,
            showClearDate: this.props.showClearDate,
            customCloseIcon: this.props.customCloseIcon,
            orientation: this.props.orientation,
            anchorDirection: this.props.anchorDirection,
            horizontalMargin: this.props.horizontalMargin,
            withPortal: this.props.withPortal,
            withFullScreenPortal: this.props.withFullScreenPortal,
            initialVisibleMonth: this.props.initialVisibleMonth,
            numberOfMonths: this.props.numberOfMonths,
            keepOpenOnDateSelect: this.props.keepOpenOnDateSelect,
            reopenPickerOnClearDate: this.props.reopenPickerOnClearDate,
            renderCalendarInfo: this.props.renderCalendarInfo,
            navPrev: this.props.navPrev,
            navNext: this.props.navNext,
            onPrevMonthClick: this.props.onPrevMonthClick,
            onNextMonthClick: this.props.onNextMonthClick,
            renderDay: this.props.renderDay,
            enableOutsideDays: this.props.enableOutsideDays,
            isDayBlocked: this.props.isDayBlocked,
            isOutsideRange: this.props.isOutsideRange,
            isDayHighlighted: this.props.isDayHighlighted,
            displayFormat: this.props.displayFormat,
            monthFormat: this.props.monthFormat,
            phrases: this.props.phrases
        };
        return React.createElement(react_dates_1.SingleDatePicker, conf);
    };
    return SingleDatePickerWrapper;
}(React.Component));
exports.SingleDatePickerWrapper = SingleDatePickerWrapper;
//# sourceMappingURL=single-date-picker-wrapper.js.map