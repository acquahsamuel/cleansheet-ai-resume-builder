import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsAnalysisComponent } from './ats-analysis.component';

describe('AtsAnalysisComponent', () => {
  let component: AtsAnalysisComponent;
  let fixture: ComponentFixture<AtsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AtsAnalysisComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AtsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
