import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecom } from './ecom';

describe('Ecom', () => {
  let component: Ecom;
  let fixture: ComponentFixture<Ecom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ecom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
