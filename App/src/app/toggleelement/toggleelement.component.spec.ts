import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleelementComponent } from './toggleelement.component';

describe('ToggleelementComponent', () => {
  let component: ToggleelementComponent;
  let fixture: ComponentFixture<ToggleelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
