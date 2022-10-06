import { TestBed } from '@angular/core/testing';

import { ColorExamService } from './color-exam.service';

describe('ColorExamService', () => {
  let service: ColorExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
