import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvRewriteComponent } from './cv-rewrite.component';

describe('CvRewriteComponent', () => {
  let component: CvRewriteComponent;
  let fixture: ComponentFixture<CvRewriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CvRewriteComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CvRewriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
