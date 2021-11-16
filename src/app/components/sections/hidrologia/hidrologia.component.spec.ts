import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidrologiaComponent } from './hidrologia.component';

describe('HidrologiaComponent', () => {
  let component: HidrologiaComponent;
  let fixture: ComponentFixture<HidrologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HidrologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HidrologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
