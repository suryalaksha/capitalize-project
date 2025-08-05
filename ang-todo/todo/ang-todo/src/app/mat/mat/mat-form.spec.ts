import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat } from './mat-form';

describe('Mat', () => {
  let component: Mat;
  let fixture: ComponentFixture<Mat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mat],
    }).compileComponents();

    fixture = TestBed.createComponent(Mat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
