import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDonatePageComponent } from './success-donate-page.component';

describe('SuccessDonatePageComponent', () => {
  let component: SuccessDonatePageComponent;
  let fixture: ComponentFixture<SuccessDonatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessDonatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessDonatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
