import { Directive } from '@angular/core';
import {
  ValidatorFn,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { PhoneNumber, PhoneNumberUtil } from 'google-libphonenumber';

/* const validateInput: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const error = { inValid: true };
  const isRequired = control.errors && control.errors.required;
  let phoneNumber: PhoneNumber;

  try {
    phoneNumber = PhoneNumberUtil.getInstance().parse(
      control.value.number,
      control.value.isoCode
    );
  } catch (e) {
    if (!isRequired) {
      return error;
    }
  }

  if (control.value) {
    if (!phoneNumber) {
      return error;
    } else {
      if (
        !PhoneNumberUtil.getInstance().isValidNumberForRegion(
          phoneNumber,
          control.value.isoCode
        )
      ) {
        return error;
      }
    }
  }
  return;
}; */

export class IonIntlTelInputValidators {
  static phone(control: AbstractControl): ValidationErrors | null {
    const error = { phone: true };
    let phoneNumber: PhoneNumber;

    if (!control.value) {
      return error;
    }

    try {
      phoneNumber = PhoneNumberUtil.getInstance().parse(
        control.value.nationalNumber,
        control.value.isoCode
      );
    } catch (e) {
      return error;
    }

    if (!phoneNumber) {
      return error;
    } else {
      if (
        !PhoneNumberUtil.getInstance().isValidNumberForRegion(
          phoneNumber,
          control.value.isoCode
        )
      ) {
        return error;
      }
    }
  }
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ionIntlTelInputValid]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IonIntlTelInputValidatorDirective,
      multi: true,
    },
  ],
})
export class IonIntlTelInputValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return IonIntlTelInputValidators.phone(control);
  }
}
