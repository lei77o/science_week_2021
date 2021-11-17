import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReconComponent } from './app-recon.component';

describe('AppReconComponent', () => {
  let component: AppReconComponent;
  let fixture: ComponentFixture<AppReconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppReconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
