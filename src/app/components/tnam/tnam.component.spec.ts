import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnamComponent } from './tnam.component';

describe('TnamComponent', () => {
  let component: TnamComponent;
  let fixture: ComponentFixture<TnamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
