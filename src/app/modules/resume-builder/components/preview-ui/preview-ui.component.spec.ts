import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewUiComponent } from './preview-ui.component';

describe('PreviewUiComponent', () => {
  let component: PreviewUiComponent;
  let fixture: ComponentFixture<PreviewUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
