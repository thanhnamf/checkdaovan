import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtuanComponent } from './atuan.component';

describe('AtuanComponent', () => {
  let component: AtuanComponent;
  let fixture: ComponentFixture<AtuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtuanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
