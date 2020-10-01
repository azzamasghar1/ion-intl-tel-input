# Interstellus Ionic International Telephone Input

An Ionic component for International Phone Number Input, that allows all countries, validation with google phone lib, limited countries, preferred countries, virtual scrolling and much more.

## Contents
- [Interstellus Ionic International Telephone Input](#interstellus-ionic-international-telephone-input)
  * [Contents](#Contents)
  * [Supported Ionic versions](#Supported-Ionic-Versions)
  * [Getting Started](#Getting-Started)
    + [Step 1: Install it.](#Step-1-Install-it)
    + [Step 2: Import it.](#Step-2-Import-it)
    + [Step 3: Add it to template.](#Step-3-Add-it-to-template)
    + [Step 4: Configure it.](#Step-4-Configure-it)
    + [Step 5: Add validation.](#Step-5-Add-validation)
    + [Step 6: Configure validation.](#Step-6-Configure-validation)
  * [Options](#Options)
  * [Events](#Events)
  * [Contributing](#Contributing)
  * [Versioning](#Versioning)
  * [Authors](#Authors)
  * [License](#License)
  * [Acknowledgments](#Acknowledgments)


## Supported Ionic Versions

- Ionic 4 (>=4.0.0)

## Getting Started

### Step 1: Install it.
#### Install Independently
```
npm install ion-intl-tel-input --save
```

#### Or Install with All dependencies
```
npm install ion-intl-tel-input ionic-selectable flag-icon-css google-libphonenumber --save
```

#### Add flag styles
Add the following to your `styles` array of project in `angular.json` (located in projects root directory).
```
{
  "input": "node_modules/flag-icon-css/sass/flag-icon.scss"
}
```

### Step 2: Import it.

First, import `IsIonIntlTelInputModule` to your `app.module.ts` that is normally located in `src\app\app.module.ts`.

```
import { IonIntlTelInputModule } from 'ion-intl-tel-input';

@NgModule({
  imports: [
    IonIntlTelInputModule
  ]
})
export class AppModule { }

```

**Note:** Additionally, if you are using lazy loaded pages. Check if your pages have a module file, for example, `home.module.ts`, and if they do then import `IsIonIntlTelInputModule` to each page module too.

```
import { IonIntlTelInputModule } from 'ionic-selectable';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonIntlTelInputModule
  ]
})
export class HomePageModule { }
```

### Step 3: Add it to template.

#### a. Usage with Template Driven Forms
```
<form>
  <ion-item>
    <ion-label position="stacked">Tel Input</ion-label>
    <ion-intl-tel-input 
      id="phone-number" 
      name="phone-number" 
      [(ngModel)]="phoneNumber" 
      #phoneNumberControl="ngModel" >
    </ion-intl-tel-input>
  </ion-item>
</form>
```

#### b. Usage with Reactive Forms
```
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <ion-item>
    <ion-label position="floating">Tel Input</ion-label>
    <ion-intl-tel-input 
      formControlName="phoneNumber" >
    </ion-intl-tel-input>
  </ion-item>
</form>
```

### Step 4: Configure it.

#### a. Usage with Template Driven Forms
```
@Component({ ... })
export class HomePage {

  phoneNumber = '';

  constructor() { }
}
```

#### b. Usage with Reactive Forms
```

@Component({ ... })
export class HomePage implements OnInit {

  formValue = {phoneNumber: '', test: ''};
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl({
        value: this.formValue.phoneNumber
      })
    });
  }

  get phoneNumber() { return this.form.get('phoneNumber'); }

  onSubmit() {
    console.log(this.phoneNumber.value);
  }
}
```

### Step 5: Add validation.

#### a. Usage with Template Driven Forms
```
<form>
  <ion-item>
    <ion-label position="stacked">Tel Input</ion-label>
    <ion-intl-tel-input 
      id="phone-number" 
      name="phone-number" 
      [(ngModel)]="phoneNumber" 
      #phoneNumberControl="ngModel"
      ionIntlTelInputValid >
    </ion-intl-tel-input>
  </ion-item>

  <div *ngIf="phoneNumberControl.invalid && phoneNumberControl.touched">
    <ion-text color="danger" *ngIf="phoneNumberControl.errors.required">
      <p class="ion-no-margin"><sub>Phone is required.</sub></p>
    </ion-text>
    <ion-text color="danger" *ngIf="phoneNumberControl.errors.phone">
      <p class="ion-no-margin"><sub>Phone is not valid.</sub></p>
    </ion-text>
  </div>
</form>
```

#### b. Usage with Reactive Forms
```
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <ion-item>
    <ion-label position="floating">Tel Input</ion-label>
    <ion-intl-tel-input 
      formControlName="phoneNumber" >
    </ion-intl-tel-input>
  </ion-item>

  <div *ngIf="phoneNumber.invalid && phoneNumber.touched">
    <ion-text color="danger" *ngIf="phoneNumber.errors.required">
      <p class="ion-no-margin"><sub>Phone is required.</sub></p>
    </ion-text>
    <ion-text color="danger" *ngIf="phoneNumber.errors.phone">
      <p class="ion-no-margin"><sub>Phone number is not valid.</sub></p>
    </ion-text>
  </div>
</form>
```

### Step 6: Configure validation.

#### a. Usage with Template Driven Forms
```
@Component({ ... })
export class HomePage {

  phoneNumber = '';

  constructor() { }
}
```

#### b. Usage with Reactive Forms
```
import { IonIntlTelInputValidators } from 'is-ion-intl-tel-input';

@Component({ ... })
export class HomePage implements OnInit {

  formValue = {phoneNumber: '', test: ''};
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl({
        value: this.formValue.phoneNumber
      }, [
        Validators.required,
        IonIntlTelInputValidators.phone
      ])
    });
  }

  get phoneNumber() { return this.form.get('phoneNumber'); }

  onSubmit() {
    console.log(this.phoneNumber.value);
  }
}
```

## Options

|          Option           |   Type   |    Default         | Description |
| ------------------------- | -------- | -------            | ----------- |
| defaultCountryiso         | string   | NULL               | Iso Code of default selected Country. |
| dialCodePrefix            | string   | +                  | Determines whether to use `00` or `+` as dial code prefix. Available attributes are `+` and `00`. |
| enableAutoCountrySelect   | boolean  | false              | Determines whether to select automatic country based on user input. |
| enablePlaceholder         | boolean  | true               | Determines whether an example number will be shown as a placeholder in input. |
| fallbackPlaceholder       | string   | NULL               | A fallaback placeholder to be used if no example number is found for a country. |
| inputPlaceholder          | string   | NULL               | If a custom placeholder is needed for input. If this property is set it will override    `enablePlaceholder`and only this placeholder will be shown. |
| maxLength                 | string   | 15                 | Maximum Length for input. |
| modalTitle                | string   | Select Country     | Title of modal opened to select country dial code. |
| modalCssClass             | string   | NULL               | CSS class to attach to dial code selection modal. |
| modalSearchPlaceholder    | string   | Enter country name | Placeholder for input in dial code selection modal. |
| modalCloseText            | string   | Close              | Text for close button in dial code selection modal. |
| modalCloseButtonSlot      | string   | end                | Slot for close button in dial code selection modal. [Ionic slots](https://ionicframework.com/docs/api/item) are supported. |
| modalCanSearch            | boolean  | true               | Determines whether dial code selection modal should be searchable or not. |
| modalShouldBackdropClose  | boolean  | true               | Determines whether dial code selection modal is closed on backdrop click. |
| modalShouldFocusSearchbar | boolean  | true               | Determines whether input should be focused when dial code selection modal is opened. |
| modalSearchFailText       | string   | No countries found | Determines whether input should be focused when dial code selection modal is opened. |
| onlyCountries             | string[] | []               | List of iso codes of manually selected countries as string, which will appear in the dropdown. **Note**: `onlyCountries` should be a string array of country iso codes. |
| preferredCountries        | string[] | []               | List of iso codes as string of  countries, which will appear at the top in dial code selection modal. **Note**: `preferredCountries` should be a string array of country iso codes.
| selectFirstCountry        | boolean  | true               | Determines whether first country should be selected in dial code select or not. |
| separateDialCode          | boolean  | true               | Determines whether to visually separate dialcode into the drop down element. |

## Events

|   Event Name   |        Type         | Description |
| -------------- | ------------------- | ----------- |
| numberChange | `EventEmitter<any>` | Fires when the Phone number Input is changed. |
| numberBlur   | `EventEmitter<any>` | Fires when the Phone number Input is blurred. |
| numberFocus  | `EventEmitter<any>` | Fires when the Phone number Input is focused. |
| numberInput  | `EventEmitter<any>` | Fires when the user is typing in Phone number Input. |
| codeChange   | `EventEmitter<any>` | Fires when the dial code selection is changed. |
| codeOpen     | `EventEmitter<any>` | Fires when the dial code selection modal is opened. |
| codeClose    | `EventEmitter<any>` | Fires when the dial code selection modal is closed. |
| codeSelect   | `EventEmitter<any>` | Fires when a dial code is selected in dial code selection modal. |

## Contributing

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Azzam Asghar** - *Initial work* - [Azzam Asghar](https://github.com/azzamasghar1)

See also the list of [contributors](https://github.com/azzamasghar1/is-ion-intl-tel-input/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details

## Acknowledgments

This project would never have been possible without the following great plugins:
* [Ionic Selectable](https://github.com/eakoriakin/ionic-selectable) by [@eakoriakin](https://github.com/eakoriakin) 
* [International Telephone Input for Angular (NgxIntlTelInput)](https://github.com/webcat12345/ngx-intl-tel-input) by [@webcat12345](https://github.com/webcat12345)
* [flag-icon-css](https://github.com/lipis/flag-icon-css) by [@lipis](https://github.com/lipis)

So please do go ahead and give them a star for their efforts.
