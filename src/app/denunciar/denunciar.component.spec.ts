import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciarComponent } from './denunciar.component';

describe('DenunciarComponent', () => {
  let component: DenunciarComponent;
  let fixture: ComponentFixture<DenunciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
