import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarzipanoComponent } from './marzipano.component';

describe('MarzipanoComponent', () => {
  let component: MarzipanoComponent;
  let fixture: ComponentFixture<MarzipanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarzipanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarzipanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
