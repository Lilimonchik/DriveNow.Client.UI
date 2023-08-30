import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetListComponent } from './cabinet-list.component';

describe('CabinetListComponent', () => {
  let component: CabinetListComponent;
  let fixture: ComponentFixture<CabinetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabinetListComponent]
    });
    fixture = TestBed.createComponent(CabinetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
