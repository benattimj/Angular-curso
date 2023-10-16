import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular-curso';
  descricao = 'descricao';
  descricao1: string = 'Exemplo de descrição'; 


  clientePremium = false;

  nome = ""

  valores =  [{
    descricao: 'teste',
    nome: 'nome',
    id: 1
   } , {
    descricao: 'descricao 2',
    nome: 'nome 2',
    id:2
   }]

adicionar() {
  this.valores.push({descricao: 'adicionado', nome: this.nome, id:3})
}

}
