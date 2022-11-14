import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRucComponent } from './buscar-ruc.component';

describe('BuscarRucComponent', () => {
  let component: BuscarRucComponent;
  let fixture: ComponentFixture<BuscarRucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarRucComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarRucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
