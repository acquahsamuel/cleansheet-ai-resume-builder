import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBuilderStartComponent } from './cv-builder-start.component';

describe('CvBuilderStartComponent', () => {
  let component: CvBuilderStartComponent;
  let fixture: ComponentFixture<CvBuilderStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CvBuilderStartComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CvBuilderStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
