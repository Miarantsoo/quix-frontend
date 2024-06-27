import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.route";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TokenInterceptorProvider} from "./token.interceptor";
import { FirstLogComponent } from './first-log/first-log.component';
import { AgentAccueilComponent } from './agent-accueil/agent-accueil.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { FileAttenteComponent } from './file-attente/file-attente.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { AdminComponent } from './admin/admin.component';
import { InsertRoleComponent } from './insert-role/insert-role.component';
import { InsertCentreComponent } from './insert-centre/insert-centre.component';
import { InsertEmployeComponent } from './insert-employe/insert-employe.component';
import { InsertClientComponent } from './insert-client/insert-client.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { ListeCentreComponent } from './liste-centre/liste-centre.component';
import { ListeClientAdminComponent } from './liste-client-admin/liste-client-admin.component';
import {NgxPaginationModule} from "ngx-pagination";
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatHint} from "@angular/material/form-field";

@NgModule({
    declarations: [
        AppComponent,
        ClientComponent,
        UtilisateurComponent,
        LoginComponent,
        FirstLogComponent,
        AgentAccueilComponent,
        ListeClientComponent,
        FileAttenteComponent,
        RendezVousComponent,
        AdminComponent,
        InsertRoleComponent,
        InsertCentreComponent,
        InsertEmployeComponent,
        InsertClientComponent,
        ListeEmployeComponent,
        ListeRoleComponent,
        ListeCentreComponent,
        ListeClientAdminComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule,
        NgxPaginationModule,
        MatNativeDateModule,
        MatButton,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatFormField,
        MatInput,
        MatLabel,
        FormsModule,
        MatRadioGroup,
        MatRadioButton,
        MatDatepickerModule,
        MatHint
    ],
    providers: [
        provideAnimationsAsync(),
        TokenInterceptorProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
