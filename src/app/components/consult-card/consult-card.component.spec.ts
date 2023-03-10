import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCardComponent } from './consult-card.component';

describe('ConsultCardComponent', () => {
  let component: ConsultCardComponent;
  let fixture: ComponentFixture<ConsultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
