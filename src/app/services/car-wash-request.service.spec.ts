import { TestBed } from '@angular/core/testing';

import { CarWashRequestService } from './car-wash-request.service';

describe('CarWashRequestService', () => {
  let service: CarWashRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarWashRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
