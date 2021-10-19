import { TestBed } from '@angular/core/testing';

import { StatisiticsService } from './statisitics.service';

describe('StatisiticsService', () => {
  let service: StatisiticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisiticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
