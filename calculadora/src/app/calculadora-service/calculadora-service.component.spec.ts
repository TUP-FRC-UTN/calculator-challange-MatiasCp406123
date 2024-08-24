import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraServiceComponent } from './calculadora-service.component';

describe('CalculadoraServiceComponent', () => {
  let component: CalculadoraServiceComponent;
  let fixture: ComponentFixture<CalculadoraServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
