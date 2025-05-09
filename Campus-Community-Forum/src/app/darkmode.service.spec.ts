import { TestBed } from '@angular/core/testing'; //Use as demonstrated in optional project -Nolan

import { DarkmodeService } from './darkmode.service';

describe('DarkmodeService', () => {
  let service: DarkmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});