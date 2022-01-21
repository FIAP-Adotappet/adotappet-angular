import { TestBed } from '@angular/core/testing';

import { PetDetailService } from './pet-detail.service';

describe('PetDetailService', () => {
  let service: PetDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
