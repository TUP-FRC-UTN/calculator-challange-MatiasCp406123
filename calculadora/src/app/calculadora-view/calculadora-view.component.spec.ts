import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraViewComponent } from './calculadora-view.component';

describe('CalculadoraViewComponent', () => {
  let component: CalculadoraViewComponent;
  let fixture: ComponentFixture<CalculadoraViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
