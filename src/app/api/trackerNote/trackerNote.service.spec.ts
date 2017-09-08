import { TestBed, inject } from '@angular/core/testing';
import { TrackerNoteService } from './trackerNote.service';

describe('TrackerNoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackerNoteService]
    });
  });

  it('should be created', inject([TrackerNoteService], (service: TrackerNoteService) => {
    expect(service).toBeTruthy();
  }));
});