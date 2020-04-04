import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaColorPickerComponent } from './cda-color-picker.component';

describe('CdaColorPickerComponent', () => {
  let component: CdaColorPickerComponent;
  let fixture: ComponentFixture<CdaColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdaColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdaColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
