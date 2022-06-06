import { ApplicationModule, Component, OnInit } from '@angular/core';
import { Coffee } from '../Coffee';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-listar-coffee',
  templateUrl: './listar-coffee.component.html',
  styleUrls: ['./listar-coffee.component.css']
})
export class ListarCoffeeComponent implements OnInit {

  listaCoffee: Coffee[] = [];

  constructor(private api : ApiService) { }

  carregarCoffee(): void {
    this.api.getCoffee().subscribe(res => {
      this.listaCoffee = res;
    });
  }

  ngOnInit(): void {
    this.carregarCoffee();
  }

}
