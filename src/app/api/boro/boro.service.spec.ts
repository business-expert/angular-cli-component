import { TestBed, inject } from '@angular/core/testing';

import { BoroService } from './boro.service';

describe('BoroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoroService]
    });
  });

  it('should be created', inject([BoroService], (service: BoroService) => {
    expect(service).toBeTruthy();
  }));
});
