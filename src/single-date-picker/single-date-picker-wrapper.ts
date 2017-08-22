import * as React from 'react';
import { SingleDatePicker } from 'react-dates';
import { SingleDatePickerComponent } from './single-date-picker.component';
import * as moment from 'moment';

export class SingleDatePickerWrapper extends React.Component<any, any> {

  private ngComponent: SingleDatePickerComponent;

  constructor(props: any) {
    super(props);

    // React component state
    this.state = this.createState();

    // Bindings to angular context
    this.ngComponent = props.ngComponent;
    this.ngComponent.updateReactDate = this.updateReactDateFromNg;

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.ngComponent.updateReactDate = this.ngComponent.updateReactDate.bind(this);
  }

  updateReactDateFromNg(date: any): void {
    // Update date
    let newDate: any = date ? moment(date) : null;
    this.onDateChange(newDate);
  }

  onDateChange(date: any): void {
    // Update this react component state
    this.setState({ date });

    // Update angular component container state
    this.ngComponent.value = date ? date.toDate() : null;
  }

  onFocusChange({ focused }: any): void {
    this.setState({ focused });
  }

  createState(): any {
    return {
      date: this.props.date ? moment(this.props.date) : null,
      focused: (this.props.focused != null) ? this.props.focused : false
    };
  }

  render(): any {
    let conf: any = {
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
      readOnly: this.props.readOnly,
      screenReaderInputMessage: this.props.screenReaderInputMessage,
      showClearDate: this.props.showClearDate,
      customCloseIcon: this.props.customCloseIcon,
      showDefaultInputIcon: this.props.showDefaultInputIcon,
      customInputIcon: this.props.customInputIcon,

      renderMonth: this.props.renderMonth,
      orientation: this.props.orientation,
      anchorDirection: this.props.anchorDirection,
      horizontalMargin: this.props.horizontalMargin,
      withPortal: this.props.withPortal,
      withFullScreenPortal: this.props.withFullScreenPortal,
      initialVisibleMonth: this.props.initialVisibleMonth,
      firstDayOfWeek: this.props.firstDayOfWeek,
      numberOfMonths: this.props.numberOfMonths,
      keepOpenOnDateSelect: this.props.keepOpenOnDateSelect,
      reopenPickerOnClearDate: this.props.reopenPickerOnClearDate,
      renderCalendarInfo: this.props.renderCalendarInfo,
      hideKeyboardShortcutsPanel: this.props.hideKeyboardShortcutsPanel,
      daySize: this.props.daySize,
      isRTL: this.props.isRTL,

      navPrev: this.props.navPrev,
      navNext: this.props.navNext,
      onPrevMonthClick: this.props.onPrevMonthClick,
      onNextMonthClick: this.props.onNextMonthClick,
      onClose: this.props.onClose,

      renderDay: this.props.renderDay,
      enableOutsideDays: this.props.enableOutsideDays,
      isDayBlocked: this.props.isDayBlocked,
      isOutsideRange: this.props.isOutsideRange,
      isDayHighlighted: this.props.isDayHighlighted,

      displayFormat: this.props.displayFormat,
      monthFormat: this.props.monthFormat,
      phrases: this.props.phrases
    };
    return React.createElement(SingleDatePicker, conf);
  }
}
