import { TestBed, inject } from '@angular/core/testing';
import { ParentJobService } from './parentJob.service';

describe('ParentJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentJobService]
    });
  });

  it('should be created', inject([ParentJobService], (service: ParentJobService) => {
    expect(service).toBeTruthy();
  }));
});