import { TestBed, inject } from '@angular/core/testing';

import { ClliService } from './clli.service';

describe('ClliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClliService]
    });
  });

  it('should be created', inject([ClliService], (service: ClliService) => {
    expect(service).toBeTruthy();
  }));
});
