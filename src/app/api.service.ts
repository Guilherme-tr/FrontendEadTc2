import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from './Coffee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:3003"

  getCoffee() : Observable <Coffee[]>{
    return this.http.get<Coffee[]>(this.baseURL + "/coffee");
  }

  cadastrarCoffee(coffee: { name: any; description: any; price: any; qtd: any; type:any}) : Observable<any>{
    let body = new HttpParams()
    body = body.set("name", coffee.name)
    body = body.set("description", coffee.description)
    body = body.set("qtd", coffee.qtd)
    body = body.set("type", coffee.type)
    body = body.set("price", String(coffee.price))
    return this.http.post(this.baseURL + "/coffee", body, {observe: "response"})
  }

  constructor(private http : HttpClient) { }
}
