import { Component } from "@angular/core";

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list-page.component.html'
})
export class ClientListPage {

    clientePremium = true
    items = ['teste']
    teste = 'teste'
    clients = ['Client 1','cliente 2']

}