import { TestBed, inject } from '@angular/core/testing';

import { ConnectService } from './connect.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectService]
    });
  });

  it('should be created', inject([ConnectService], (service: ConnectService) => {
    expect(service).toBeTruthy();
  }));
});
