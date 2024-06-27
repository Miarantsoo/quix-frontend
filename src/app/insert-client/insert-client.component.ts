import {Component, OnInit} from '@angular/core';
import {ListeClientService} from "../liste-client/liste-client.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-insert-client',
    templateUrl: './insert-client.component.html',
    styleUrl: './insert-client.component.css'
})
export class InsertClientComponent implements OnInit{

    addClient: FormGroup;
    allClients: any;
    clientsInternes?: any[];
    clientRecherche: string = "";
    idParrain: number = 0;
    typeClient?: number;

    constructor(private format: FormBuilder, private listeClient: ListeClientService) {
        this.addClient = new FormGroup({
            nom: new FormControl(),
            prenom: new FormControl(),
            dateNaissance: new FormControl(),
            lieuNaissance: new FormControl(),
            sexe: new FormControl(),
            adresse: new FormControl(),
            cin: new FormControl(),
            dateCin: new FormControl(),
            lieuCin: new FormControl(),
            email: new FormControl(),
            telephone: new FormControl(),
            profession: new FormControl(),
            societe: new FormControl(),
            typeClient: new FormControl(),
            matricule_parrain: new FormControl(),
            idParrainage: new FormControl()
        });
    }

    ngOnInit() {
        this.addClient = this.format.group({
            nom: ['', [Validators.required]],
            prenom: ['', [Validators.required]],
            dateNaissance: ['', [Validators.required]],
            lieuNaissance: ['', [Validators.required]],
            sexe: ['', [Validators.required]],
            adresse: ['', [Validators.required]],
            cin: [''],
            dateCin: [''],
            lieuCin: [''],
            email: [''],
            telephone: [''],
            profession: [''],
            societe: [''],
            typeClient: ['', [Validators.required]],
            matricule_parrain: [''],
            idParrainage: ['', [Validators.required]],
        })
        this.listeClient.getAllClients(1).subscribe(
            (resolve) => {
                this.allClients = resolve
            }
        )
    }

    changeTypeClient(event: any){
        this.typeClient = event.value;
        if (this.addClient.get("matricule_parrain")?.value == ""){
            this.clientsInternes = [];
        }  else {
            this.clientsInternes = [...this.allClients];
        }
    }


    recherche(){
        if (this.addClient.get("matricule_parrain")?.value.trim() === "") {
            this.clientsInternes = [];
        } else {
            this.clientsInternes = this.allClients.filter((u: any) =>
                (u.nom.toLowerCase() + " " + u.prenom.toLowerCase()).includes(this.addClient.get("matricule_parrain")?.value.toLowerCase())
            );
        }
    }

    retrieveName(event: any){
        this.idParrain = event.target.value;
        console.log(this.idParrain)
        const name = event.target.textContent;
        console.log(name)
        this.addClient.get("matricule_parrain")?.setValue(name);
        this.clientsInternes = [];
    }

}
