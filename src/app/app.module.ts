import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCoffeeComponent } from './listar-coffee/listar-coffee.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarCoffeeComponent } from './cadastrar-coffee/cadastrar-coffee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarCoffeeComponent,
    CadastrarCoffeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
