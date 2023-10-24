import { Component } from "@angular/core";

@Component({
    selector: 'app-binding',
    template: `
        <h1>Imagem do Angular</h1>
        <img [src]="imagem" [style]="{width:width}"/>
    `
})
export class BindingPageComponent {
    width="300px"
    imagem = "https://www.example.com/images/dinosaur.jpg" 
}