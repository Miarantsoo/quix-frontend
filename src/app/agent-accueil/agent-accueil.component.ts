import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-agent-accueil',
    templateUrl: './agent-accueil.component.html',
    styleUrl: './agent-accueil.component.css'
})
export class AgentAccueilComponent implements OnInit{

    imagePath: string = "assets/img/quix.png";

    constructor(private route: Router) {
    }

    ngOnInit() {
        this.file();
    }

    file(){
        this.route.navigateByUrl("/agent-accueil/file-attente");
    }

    liste(type: number){
        const params = {type: type}
        this.route.navigate([`/agent-accueil/liste-client`], { queryParams: params });
    }

}
