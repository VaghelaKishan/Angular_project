import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwichcaseComponent } from './swichcase.component';

describe('SwichcaseComponent', () => {
  let component: SwichcaseComponent;
  let fixture: ComponentFixture<SwichcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwichcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwichcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
