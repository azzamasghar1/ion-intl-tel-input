import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { CountryI } from './../models/country.model';

@Pipe({name: 'countryPlaceholder'})
export class CountryPlaceholder implements PipeTransform {
  transform(country: CountryI, inputPlaceholder: string, separateDialCode: boolean, fallbackPlaceholder: string): string {
    if (inputPlaceholder && inputPlaceholder.length > 0) {
      return inputPlaceholder;
    }

    const phoneUtil = PhoneNumberUtil.getInstance();
    try {
      const placeholder = phoneUtil.format(phoneUtil.getExampleNumber(country.isoCode), PhoneNumberFormat.INTERNATIONAL);
      if (placeholder) {
        if (separateDialCode) {
          return placeholder.substr(placeholder.indexOf(' ') + 1);
        } else {
          return placeholder;
        }
      }
    } catch (e) {
      return fallbackPlaceholder;
    }
  }
}
