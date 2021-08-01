import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaslasdenunciasComponent } from './todaslasdenuncias.component';

describe('TodaslasdenunciasComponent', () => {
  let component: TodaslasdenunciasComponent;
  let fixture: ComponentFixture<TodaslasdenunciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaslasdenunciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaslasdenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
