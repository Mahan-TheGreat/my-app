import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSectionHomeComponent } from './info-section-home.component';

describe('InfoSectionHomeComponent', () => {
  let component: InfoSectionHomeComponent;
  let fixture: ComponentFixture<InfoSectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSectionHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
