import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDvdComponent } from './edit-dvd.component';

describe('EditDvdComponent', () => {
  let component: EditDvdComponent;
  let fixture: ComponentFixture<EditDvdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDvdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
