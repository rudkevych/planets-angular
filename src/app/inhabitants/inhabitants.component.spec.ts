import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabitantsComponent } from './inhabitants.component';

describe('InhabitantsComponent', () => {
  let component: InhabitantsComponent;
  let fixture: ComponentFixture<InhabitantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabitantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabitantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
