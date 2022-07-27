import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbickComponent } from './tbick.component';

describe('TbickComponent', () => {
  let component: TbickComponent;
  let fixture: ComponentFixture<TbickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
