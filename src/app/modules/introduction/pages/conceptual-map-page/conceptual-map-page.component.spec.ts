import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptualMapPageComponent } from './conceptual-map-page.component';

describe('ConceptualMapPageComponent', () => {
  let component: ConceptualMapPageComponent;
  let fixture: ComponentFixture<ConceptualMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptualMapPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptualMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
