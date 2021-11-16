import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrimensuraComponent } from './agrimensura.component';

describe('AgrimensuraComponent', () => {
  let component: AgrimensuraComponent;
  let fixture: ComponentFixture<AgrimensuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrimensuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrimensuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
