import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckDocumentsComponent } from './admin-check-documents.component';

describe('AdminCheckDocumentsComponent', () => {
  let component: AdminCheckDocumentsComponent;
  let fixture: ComponentFixture<AdminCheckDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCheckDocumentsComponent]
    });
    fixture = TestBed.createComponent(AdminCheckDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
