import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "../model/pessoa";

const URL = "assets/data/clients.json"
Injectable({providedIn: 'root'})
export class Pessoaservice {
    constructor( ) {} 

    salvar(pessoa: Pessoa){
        console.log('salvando...')
        console.log(pessoa)
    }

    listar(): Observable<Pessoa[]>{
        this.http.get(URL)

    }
}