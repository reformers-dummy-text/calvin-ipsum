import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphSpecComponent } from './paragraph-spec.component';

describe('ParagraphSpecComponent', () => {
  let component: ParagraphSpecComponent;
  let fixture: ComponentFixture<ParagraphSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
