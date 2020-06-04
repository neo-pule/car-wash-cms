import { TestBed } from '@angular/core/testing';

import { StoreObjService } from './store-obj.service';

describe('StoreObjService', () => {
  let service: StoreObjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreObjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
