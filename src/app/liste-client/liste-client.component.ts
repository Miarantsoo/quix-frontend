import {Component, OnInit} from '@angular/core';
import {ListeClientService} from "./liste-client.service";
import {MatDialog} from "@angular/material/dialog";
import {InsertClientComponent} from "../insert-client/insert-client.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-liste-client',
    templateUrl: './liste-client.component.html',
    styleUrl: './liste-client.component.css'
})
export class ListeClientComponent implements OnInit{

    selectedClient: number = -1;
    clients: any;
    allClients: any;
    parPage = 15;
    totalItems!: number;
    page: number = 1;
    recherche: string = "";

    constructor(private listeClient: ListeClientService, private dialog: MatDialog, private route: ActivatedRoute) {
    }

    openDialogForm(){
        this.dialog.open(InsertClientComponent, {
            height: '90%',
            width: '60%'
        })
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.selectedClient = +params['type'];
            this.loadClients();
        });
    }

    loadClients() {
        this.listeClient.getAllClients(this.selectedClient).subscribe(
            (resolve) => {
                this.allClients = resolve;
                this.clients = [...this.allClients]
                this.totalItems = this.clients.length;
            }
        );
    }

    research(){;
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
