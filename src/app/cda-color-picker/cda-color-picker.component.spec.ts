import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaColorPickerComponent } from './cda-color-picker.component';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

describe('CdaColorPickerComponent', () => {
  let component: CdaColorPickerComponent;
  let fixture: ComponentFixture<CdaColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdaColorPickerComponent ],
      imports: [
        ColorPickerModule,
      ],
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

  it('should emit colorInput when selecting from colorPicker', ()=> {
    let selectedColor = "";
    component.onColorPick.subscribe((color) => selectedColor = color);
    component.onChange("#ffffff");
    expect(selectedColor).not.toEqual("");
  })
});
