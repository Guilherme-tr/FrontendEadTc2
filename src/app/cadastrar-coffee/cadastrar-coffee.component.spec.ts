import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCoffeeComponent } from './cadastrar-coffee.component';

describe('CadastrarCoffeeComponent', () => {
  let component: CadastrarCoffeeComponent;
  let fixture: ComponentFixture<CadastrarCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
