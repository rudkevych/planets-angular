import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabitantComponent } from './inhabitant.component';

describe('InhabitantComponent', () => {
  let component: InhabitantComponent;
  let fixture: ComponentFixture<InhabitantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabitantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
