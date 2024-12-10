import { TestBed } from '@angular/core/testing';

import { LibrosServiciosService } from './libros-servicios.service';

describe('LibrosServiciosService', () => {
  let service: LibrosServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
