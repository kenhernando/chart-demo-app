import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaHeaderComponent } from './cda-header.component';

describe('CdaHeaderComponent', () => {
  let component: CdaHeaderComponent;
  let fixture: ComponentFixture<CdaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
