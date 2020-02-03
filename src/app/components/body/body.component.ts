import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: "Un gran poder require... una gran resp..",
        autor: 'Ben parker'
    }

    personajes: String[] = ['Spiderman', 'Venom', 'Carlos', 'Alex']

}