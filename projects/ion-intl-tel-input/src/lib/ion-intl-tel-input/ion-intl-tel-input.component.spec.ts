import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonIntlTelInputComponent } from './ion-intl-tel-input.component';

describe('IonIntlTelInputComponent', () => {
  let component: IonIntlTelInputComponent;
  let fixture: ComponentFixture<IonIntlTelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonIntlTelInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonIntlTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
