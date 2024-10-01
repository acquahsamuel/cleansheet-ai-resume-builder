import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderUiComponent } from './builder-ui.component';

describe('BuilderUiComponent', () => {
  let component: BuilderUiComponent;
  let fixture: ComponentFixture<BuilderUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BuilderUiComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(BuilderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
