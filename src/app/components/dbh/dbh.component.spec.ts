import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbhComponent } from './dbh.component';

describe('DbhComponent', () => {
  let component: DbhComponent;
  let fixture: ComponentFixture<DbhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
