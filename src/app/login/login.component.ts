import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

    loginForm: FormGroup;
    submitted = false;
    token: any | undefined;
    notLogged = false;

    constructor(private format: FormBuilder, private service: LoginService, private route: Router) {
        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl(''),
        });
    }

    ngOnInit() {
        this.submitted = false;
        this.loginForm = this.format.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
    }

    get f(): { [key: string]: AbstractControl } {
        return this.loginForm.controls;
    }

    login(){
        this.submitted = true;
        if (this.loginForm.valid) {
            const email = this.loginForm.get('email')?.value;
            const password = this.loginForm.get('password')?.value;
            this.service.login(email, password).subscribe(
                (token) => {
                    this.submitted = false;
                    this.token = token.token;
                    if(this.token === "Invalid email or password") {
                        this.notLogged = true;
                        this.f['email'].reset();
                        this.f['password'].reset();
                        return;
                    }
                    this.notLogged = false;
                    localStorage.setItem('user', this.token);
                    this.route.navigateByUrl("/utilisateur");
                },
                error => {
                    console.error(error);
                },
            );
        } else {
            console.error("Not logged");
        }
    }

}
