import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdoComponent } from './kdo.component';

describe('KdoComponent', () => {
  let component: KdoComponent;
  let fixture: ComponentFixture<KdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
