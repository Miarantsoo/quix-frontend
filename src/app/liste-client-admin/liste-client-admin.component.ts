import {Component, OnInit} from '@angular/core';
import {ListeClientService} from "../liste-client/liste-client.service";
import {MatDialog} from "@angular/material/dialog";
import {InsertClientComponent} from "../insert-client/insert-client.component";

@Component({
    selector: 'app-liste-client-admin',
    templateUrl: './liste-client-admin.component.html',
    styleUrl: './liste-client-admin.component.css'
})
export class ListeClientAdminComponent implements OnInit{

    selectedClient = 1;
    clients: any;
    allClients: any;
    parPage = 15;
    totalItems!: number;
    page: number = 1;
    recherche: string = "";

    constructor(private listeClient: ListeClientService, private dialog: MatDialog) {
    }

    openDialogForm(){
        this.dialog.open(InsertClientComponent, {
            height: '90%',
            width: '60%'
        })
    }

    ngOnInit() {
        this.listeClient.getAllClients(this.selectedClient).subscribe(
            (resolve) => {
                this.allClients = resolve
                this.clients = [...this.allClients];
                console.log(this.clients);
                this.totalItems = this.clients.length;
            }
        )
    }

    onClientChange(event: any){
        this.selectedClient = event.value;
        console.log(this.selectedClient);
        this.listeClient.getAllClients(this.selectedClient).subscribe(
            (resolve) => {
                this.allClients = resolve
                this.clients = [...this.allClients];
                this.page = 1;
                this.totalItems =this.clients.length;
            }
        );
    }

    research(){
        if (this.recherche.trim() === "") {
            this.clients = [...this.allClients];
        } else {
            this.clients = this.allClients.filter((u: any) =>
                (u.nom.toLowerCase() + " " + u.prenom.toLowerCase()).includes(this.recherche.toLowerCase())
            );
        }
        this.totalItems = this.clients.length;
    }
}
