import { TestBed } from '@angular/core/testing';

import { IonIntlTelInputService } from './ion-intl-tel-input.service';

describe('IonIntlTelInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonIntlTelInputService = TestBed.get(IonIntlTelInputService);
    expect(service).toBeTruthy();
  });
});
