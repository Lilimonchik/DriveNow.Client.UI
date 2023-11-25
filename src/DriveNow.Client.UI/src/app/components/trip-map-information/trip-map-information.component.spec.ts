import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMapInformationComponent } from './trip-map-information.component';

describe('TripMapInformationComponent', () => {
  let component: TripMapInformationComponent;
  let fixture: ComponentFixture<TripMapInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripMapInformationComponent]
    });
    fixture = TestBed.createComponent(TripMapInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
