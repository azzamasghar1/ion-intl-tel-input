import { Directive } from '@angular/core';
import { ValidatorFn, NG_VALIDATORS, Validator, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { PhoneNumber, PhoneNumberUtil } from 'google-libphonenumber';

const ionIntlTelInputValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const error = { valid: true };
    const isRequired = control.errors && control.errors.required;
    let phoneNumber: PhoneNumber;

    try {
        phoneNumber = PhoneNumberUtil.getInstance()
        .parse(control.value.number, control.value.isoCode);
    } catch (e) {
        if (!isRequired) { return error; }
    }

    if (control.value) {
        if (!phoneNumber) {
            return error;
        } else {
            if (!PhoneNumberUtil.getInstance()
            .isValidNumberForRegion(phoneNumber, control.value.isoCode)) {
                return error;
            }
        }
    }
    return;
};

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[ionIntlTelInputValid]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: IonIntlTelInputValidatorDirective,
        multi: true
    }]
})
export class IonIntlTelInputValidatorDirective implements Validator {
    validate(control: AbstractControl): {[key: string]: any} | null {
        console.log('validate');
        return ionIntlTelInputValidator(control);
    }
}
