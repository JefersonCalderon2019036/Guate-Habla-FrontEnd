import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesnoticiasComponent } from './detallesnoticias.component';

describe('DetallesnoticiasComponent', () => {
  let component: DetallesnoticiasComponent;
  let fixture: ComponentFixture<DetallesnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesnoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
