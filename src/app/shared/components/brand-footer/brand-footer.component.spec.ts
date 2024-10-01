import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandFooterComponent } from './brand-footer.component';

describe('BrandFooterComponent', () => {
  let component: BrandFooterComponent;
  let fixture: ComponentFixture<BrandFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [BrandFooterComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
