import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login/login.service";
import {resolve} from "@angular/compiler-cli";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

    imagePath: string = "assets/img/quix.png";
    user: any;

    constructor(private route: Router, private loginService: LoginService) {
        this.loginService.getUser().subscribe(
            (resolve) => {
                this.user = resolve;
            }
        )
    }

    ngOnInit() {
    }

    employes(){
        this.route.navigate(["/admin/liste-employe"]);
    }

    clients(){
        this.route.navigate(["/admin/liste-client-admin"]);
    }

    centres(){
        this.route.navigate(["/admin/liste-centre"]);
    }

    roles(){
        this.route.navigate(["/admin/liste-role"]);
    }

}

