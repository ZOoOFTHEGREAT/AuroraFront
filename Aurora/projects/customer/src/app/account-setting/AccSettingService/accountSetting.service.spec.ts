/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountSettingService } from './accountSetting.service';

describe('Service: AccountSetting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountSettingService]
    });
  });

  it('should ...', inject([AccountSettingService], (service: AccountSettingService) => {
    expect(service).toBeTruthy();
  }));
});
