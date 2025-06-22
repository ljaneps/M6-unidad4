import { TestBed } from '@angular/core/testing';

import { EstadoContadorService } from './estado-contador.service';

describe('EstadoContadorService', () => {
  let service: EstadoContadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoContadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
