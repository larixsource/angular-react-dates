import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { SingleDatePickerComponent } from '../src/single-date-picker/single-date-picker.component';
import { AngularReactDatesModule } from '../src';

describe('dummy component test', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularReactDatesModule.forRoot()
      ]
    });
  });

  it('dummy test', () => {
    // Empty
  });

});
