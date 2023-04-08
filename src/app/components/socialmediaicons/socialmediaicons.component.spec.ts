import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaiconsComponent } from './socialmediaicons.component';

describe('SocialmediaiconsComponent', () => {
  let component: SocialmediaiconsComponent;
  let fixture: ComponentFixture<SocialmediaiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaiconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
