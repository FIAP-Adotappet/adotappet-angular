import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { PetDataService } from './pet-data.service';

describe('PetDataService', () => {
  let service: PetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
		imports: [
			RouterTestingModule,
			HttpClientModule
		],
	});
    service = TestBed.inject(PetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
