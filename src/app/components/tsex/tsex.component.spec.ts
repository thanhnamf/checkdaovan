import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsexComponent } from './tsex.component';

describe('TsexComponent', () => {
  let component: TsexComponent;
  let fixture: ComponentFixture<TsexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
