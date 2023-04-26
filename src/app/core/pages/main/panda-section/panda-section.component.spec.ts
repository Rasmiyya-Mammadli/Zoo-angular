import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaSectionComponent } from './panda-section.component';

describe('PandaSectionComponent', () => {
  let component: PandaSectionComponent;
  let fixture: ComponentFixture<PandaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PandaSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
