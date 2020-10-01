import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IonicSelectableModule } from 'ionic-selectable';

import { CountryPlaceholder } from './pipes/country-placeholder';
import { IonIntlTelInputValidators, IonIntlTelInputValidatorDirective } from './ion-intl-tel-input.directive';
import { IonIntlTelInputComponent } from './ion-intl-tel-input/ion-intl-tel-input.component';
import { IonIntlTelInputService } from './ion-intl-tel-input.service';

@NgModule({
  declarations: [
    CountryPlaceholder,
    IonIntlTelInputValidatorDirective,
    IonIntlTelInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule
  ],
  exports: [
    IonIntlTelInputComponent,
    IonIntlTelInputValidatorDirective
  ],
  providers: [
    IonIntlTelInputService
  ],
})
export class IonIntlTelInputModule { }
