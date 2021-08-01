import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesdenunciasComponent } from './detallesdenuncias.component';

describe('DetallesdenunciasComponent', () => {
  let component: DetallesdenunciasComponent;
  let fixture: ComponentFixture<DetallesdenunciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesdenunciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesdenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
