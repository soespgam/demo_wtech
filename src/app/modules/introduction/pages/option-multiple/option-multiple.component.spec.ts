import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMultipleComponent } from './option-multiple.component';

describe('OptionMultipleComponent', () => {
  let component: OptionMultipleComponent;
  let fixture: ComponentFixture<OptionMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
