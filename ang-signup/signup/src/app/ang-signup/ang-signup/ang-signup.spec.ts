import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngSignup } from './ang-signup';

describe('AngSignup', () => {
  let component: AngSignup;
  let fixture: ComponentFixture<AngSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
