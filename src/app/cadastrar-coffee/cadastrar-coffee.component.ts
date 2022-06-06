import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cadastrar-coffee',
  templateUrl: './cadastrar-coffee.component.html',
  styleUrls: ['./cadastrar-coffee.component.css']
})
export class CadastrarCoffeeComponent implements OnInit {

  coffee = {name: "", description: "", price: 0, qtd: 0, type: ""}

  constructor(private api : ApiService) { }

  cadastrar(){
    this.api.cadastrarCoffee(this.coffee).subscribe(res => {
      console.log(res)
    });
  }

  ngOnInit(): void {
  }

}
