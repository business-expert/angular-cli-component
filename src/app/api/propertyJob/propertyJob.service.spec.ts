import { TestBed, inject } from '@angular/core/testing';
import { PropertyJobService } from './propertyJob.service';

describe('PropertyJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyJobService]
    });
  });

  it('should be created', inject([PropertyJobService], (service: PropertyJobService) => {
    expect(service).toBeTruthy();
  }));
});