import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCoffeeComponent } from './listar-coffee.component';

describe('ListarCoffeeComponent', () => {
  let component: ListarCoffeeComponent;
  let fixture: ComponentFixture<ListarCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
