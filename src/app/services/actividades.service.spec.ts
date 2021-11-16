import { TestBed } from '@angular/core/testing';

import { ActividadesService } from './actividades.service';

describe('ActivicadesService', () => {
  let service: ActividadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
