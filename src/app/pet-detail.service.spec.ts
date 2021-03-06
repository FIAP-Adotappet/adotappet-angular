import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { PetDetailService } from './pet-detail.service';

describe('PetDetailService', () => {
  let service: PetDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
		imports: [
			RouterTestingModule,
			HttpClientModule
		],
	});
    service = TestBed.inject(PetDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
