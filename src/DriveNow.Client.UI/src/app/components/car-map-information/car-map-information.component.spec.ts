import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMapInformationComponent } from './car-map-information.component';

describe('CarMapInformationComponent', () => {
  let component: CarMapInformationComponent;
  let fixture: ComponentFixture<CarMapInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarMapInformationComponent]
    });
    fixture = TestBed.createComponent(CarMapInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
