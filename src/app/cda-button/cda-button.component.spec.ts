import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaButtonComponent } from './cda-button.component';

describe('CdaButtonComponent', () => {
  let component: CdaButtonComponent;
  let fixture: ComponentFixture<CdaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
