import { Component } from '@angular/core';

@Component({
    selector: 'app-file-attente',
    templateUrl: './file-attente.component.html',
    styleUrl: './file-attente.component.css'
})
export class FileAttenteComponent {

    medecinDispo: any[] = [
        {
            nom: "Haha",
            prenom: "Hoho",
            role: "Pediatre"
        },
        {
            nom: "LOL",
            prenom: "LAL",
            role: "Cardiologue"
        },
    ];

}
