import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrangersComponent } from './prangers.component';

describe('PrangersComponent', () => {
  let component: PrangersComponent;
  let fixture: ComponentFixture<PrangersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrangersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
