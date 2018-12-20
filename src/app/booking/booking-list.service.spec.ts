import { TestBed, async, inject } from '@angular/core/testing';
import { BookingListService } from './booking-list.service';

describe('Service: BookingList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingListService]
    });
  });

  it('should ...', inject([BookingListService], (service: BookingListService) => {
    expect(service).toBeTruthy();
  }));
});
