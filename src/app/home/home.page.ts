import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IonIntlTelInputValidators } from 'ion-intl-tel-input';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formValue = {phoneNumber: '', test: ''};
  form: FormGroup;
  phone = '';

  defaultCountryIsoTest = 'pk';
  dialCodePrefix = '+';
  enableAutoCountrySelect = false;
  enablePlaceholder = true;
  fallbackPlaceholder = '';
  inputPlaceholder = '';
  maxLength = '15';
  modalTitle = 'Select Country';
  modalCssClass = '';
  modalSearchPlaceholder = 'Enter country name';
  modalCloseText = 'Close';
  modalCloseButtonSlot = 'end';
  modalCanSearch = true;
  modalShouldBackdropClose = true;
  modalShouldFocusSearchbar = true;
  modalSearchFailText = 'No countries found.';
  onlyCountries = [];
  preferredCountries = [];
  selectFirstCountry = true;
  separateDialCode = true;

  disableTest = false;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl({
        value: this.formValue.phoneNumber,
        disabled: this.disableTest
      }, [
        Validators.required,
        IonIntlTelInputValidators.phone
      ])
    });
  }

  logPhone() {
    console.log(this.phone);
  }

  get phoneNumber() { return this.form.get('phoneNumber'); }

  onSubmit() {
    console.log(this.phoneNumber.value);
  }

}
