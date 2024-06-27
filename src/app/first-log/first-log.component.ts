import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from "./validation";
import {FirstLogService} from "./first-log.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-first-log',
    templateUrl: './first-log.component.html',
    styleUrl: './first-log.component.css'
})
export class FirstLogComponent implements OnInit{

    changePasswordForm: FormGroup;
    submitted = false;
    isDisabled = true;

    constructor(private format: FormBuilder, private firstLogService: FirstLogService, private route: Router) {
        this.changePasswordForm = new FormGroup({
            password: new FormControl(''),
            confirmedPassword: new FormControl(''),
        });
    }

    ngOnInit() {
        this.submitted = false;
        this.changePasswordForm = this.format.group({
            password: ['', [Validators.required]],
            confirmedPassword: ['', [Validators.required]]
        },
        {
            validators: [Validation.match('password', 'confirmedPassword')],
        }
        )
    }

    get f(): { [key: string]: AbstractControl } {
        return this.changePasswordForm.controls;
    }

    change(){
        if(this.changePasswordForm.valid){
            const password = this.changePasswordForm.get('password')?.value;
            this.firstLogService.changePassword(password).subscribe(
                (resolve) => {
                    const state = resolve.state;
                    if(state === "success"){
                        console.log("dsfzvgf")
                        this.route.navigateByUrl("/utilisateur");
                    }
                },
                error => {
                    console.log("An error beh occured")
                }
            )
        } else {
            console.error("An error occured");
        }
    }

}
