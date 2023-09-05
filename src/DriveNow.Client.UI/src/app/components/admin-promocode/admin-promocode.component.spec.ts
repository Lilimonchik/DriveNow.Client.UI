import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPromocodeComponent } from './admin-promocode.component';

describe('AdminPromocodeComponent', () => {
  let component: AdminPromocodeComponent;
  let fixture: ComponentFixture<AdminPromocodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPromocodeComponent]
    });
    fixture = TestBed.createComponent(AdminPromocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
