import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationGuideeComponent } from './meditation-guidee.component';

describe('MeditationGuideeComponent', () => {
  let component: MeditationGuideeComponent;
  let fixture: ComponentFixture<MeditationGuideeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeditationGuideeComponent]
    });
    fixture = TestBed.createComponent(MeditationGuideeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
