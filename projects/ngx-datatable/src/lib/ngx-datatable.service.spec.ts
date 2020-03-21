import { TestBed } from '@angular/core/testing';

import { NgxDatatableService } from './ngx-datatable.service';

describe('NgxDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDatatableService = TestBed.get(NgxDatatableService);
    expect(service).toBeTruthy();
  });
});
