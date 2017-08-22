import * as React from 'react';
import { DateRangePicker } from 'react-dates';
import { DateRangePickerComponent } from './date-range-picker.component';
import * as moment from 'moment';

export class DateRangePickerWrapper extends React.Component<any, any> {

  private ngComponent: DateRangePickerComponent;

  constructor(props: any) {
    super(props);

    // React component state
    this.state = this.createState();

    // Bindings to angular context
    this.ngComponent = props.ngComponent;
    this.ngComponent.updateReactDateRange = this.updateReactDateRangeFromNg;

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.ngComponent.updateReactDateRange = this.ngComponent.updateReactDateRange.bind(this);
  }

  updateReactDateRangeFromNg(dateRange: any): void {
    // Update date range
    if (dateRange) {
      let startDate: any = dateRange.start ? moment(dateRange.start) : null;
      let endDate: any = dateRange.end ? moment(dateRange.end) : null;
      this.onDatesChange({ startDate, endDate });
    }
  }

  onDatesChange({ startDate, endDate }: any): void {
    // Update this react component state
    this.setState({ startDate, endDate });

    // Update angular component container state
    let ngDateRange: any;
    if (startDate || endDate) {
      ngDateRange = {
        start: startDate ? startDate.toDate() : null,
        end: endDate ? endDate.toDate() : null
      };
    }
    this.ngComponent.value = ngDateRange;
  }

  onFocusChange(focusedInput: any): void {
    this.setState({ focusedInput });
  }

  createState(): any {
    // Get date range from props
    let startDate: any = this.props.dateRange ? this.props.dateRange.start : null;
    let endDate: any = this.props.dateRange ? this.props.dateRange.end : null;

    return {
      startDate: startDate ? moment(startDate) : null,
      endDate: endDate ? moment(endDate) : null,
      focusedInput: this.props.focusedInput
    };
  }

  render(): any {
    let conf: any = {
      // Required
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      onDatesChange: this.onDatesChange,
      focusedInput: this.state.focusedInput,
      onFocusChange: this.onFocusChange,

      // Optional
      startDateId: this.props.startDateId,
      startDatePlaceholderText: this.props.startDatePlaceholderText,
      endDateId: this.props.endDateId,
      endDatePlaceholderText: this.props.endDatePlaceholderText,
      disabled: this.props.disabled,
      required: this.props.required,
      readOnly: this.props.readOnly,
      screenReaderInputMessage: this.props.screenReaderInputMessage,
      showClearDates: this.props.showClearDates,
      showDefaultInputIcon: this.props.showDefaultInputIcon,
      customInputIcon: this.props.customInputIcon,
      customArrowIcon: this.props.customArrowIcon,
      customCloseIcon: this.props.customCloseIcon,

      renderMonth: this.props.renderMonth,
      orientation: this.props.orientation,
      anchorDirection: this.props.anchorDirection,
      horizontalMargin: this.props.horizontalMargin,
      withPortal: this.props.withPortal,
      withFullScreenPortal: this.props.withFullScreenPortal,
      daySize: this.props.daySize,
      isRTL: this.props.isRTL,
      initialVisibleMonth: this.props.initialVisibleMonth,
      firstDayOfWeek: this.props.firstDayOfWeek,
      numberOfMonths: this.props.numberOfMonths,
      keepOpenOnDateSelect: this.props.keepOpenOnDateSelect,
      reopenPickerOnClearDates: this.props.reopenPickerOnClearDates,
      renderCalendarInfo: this.props.renderCalendarInfo,
      hideKeyboardShortcutsPanel: this.props.hideKeyboardShortcutsPanel,

      navPrev: this.props.navPrev,
      navNext: this.props.navNext,
      onPrevMonthClick: this.props.onPrevMonthClick,
      onNextMonthClick: this.props.onNextMonthClick,
      onClose: this.props.onClose,

      renderDay: this.props.renderDay,
      minimumNights: this.props.minimumNights,
      enableOutsideDays: this.props.enableOutsideDays,
      isDayBlocked: this.props.isDayBlocked,
      isOutsideRange: this.props.isOutsideRange,
      isDayHighlighted: this.props.isDayHighlighted,

      displayFormat: this.props.displayFormat,
      monthFormat: this.props.monthFormat,
      phrases: this.props.phrases
    };
    return React.createElement(DateRangePicker, conf);
  }
}
