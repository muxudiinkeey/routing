import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsetComponent } from './edit-uset.component';

describe('EditUsetComponent', () => {
  let component: EditUsetComponent;
  let fixture: ComponentFixture<EditUsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUsetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
