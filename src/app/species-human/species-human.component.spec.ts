import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesHumanComponent } from './species-human.component';

describe('SpeciesHumanComponent', () => {
  let component: SpeciesHumanComponent;
  let fixture: ComponentFixture<SpeciesHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciesHumanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeciesHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
