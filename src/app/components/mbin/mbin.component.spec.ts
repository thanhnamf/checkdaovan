import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbinComponent } from './mbin.component';

describe('MbinComponent', () => {
  let component: MbinComponent;
  let fixture: ComponentFixture<MbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
