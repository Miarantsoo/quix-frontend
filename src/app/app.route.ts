import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {roleAuthGuard} from "./login/role-auth.guard";
import {FirstLogComponent} from "./first-log/first-log.component";
import {AgentAccueilComponent} from "./agent-accueil/agent-accueil.component";
import {ListeClientComponent} from "./liste-client/liste-client.component";
import {FileAttenteComponent} from "./file-attente/file-attente.component";
import {AdminComponent} from "./admin/admin.component";
import {InsertClientComponent} from "./insert-client/insert-client.component";
import {ListeEmployeComponent} from "./liste-employe/liste-employe.component";
import {InsertEmployeComponent} from "./insert-employe/insert-employe.component";
import {ListeCentreComponent} from "./liste-centre/liste-centre.component";
import {InsertCentreComponent} from "./insert-centre/insert-centre.component";
import {ListeRoleComponent} from "./liste-role/liste-role.component";
import {InsertRoleComponent} from "./insert-role/insert-role.component";
import {ListeClientAdminComponent} from "./liste-client-admin/liste-client-admin.component";

export const routes: Routes = [
    {
        path: "",
        title: "QUIX | Login",
        component: LoginComponent
    },
    {
        path: "utilisateur",
        title: "QUIX | User",
        component: UtilisateurComponent,
        canActivate: [roleAuthGuard]
    },
    {
        path: "first-log",
        title: "QUIX | First log",
        component: FirstLogComponent,
    },
    {
        path: "agent-accueil",
        title: "QUIX | Agent d'accueil",
        component: AgentAccueilComponent,
        children: [
            {
                path: "liste-client",
                component: ListeClientComponent
            },
            {
                path: "file-attente",
                component: FileAttenteComponent
            }
        ]
    },
    {
        path: "admin",
        title: "QUIX | Admin",
        component: AdminComponent,
        children: [
            {
                path: "liste-client-admin",
                component: ListeClientAdminComponent
            },
            {
                path: "insert-client",
                component: InsertClientComponent,
            },
            {
                path: "liste-employe",
                component: ListeEmployeComponent
            },
            {
                path: "insert-employe",
                component: InsertEmployeComponent,
            },
            {
                path: "liste-centre",
                component: ListeCentreComponent
            },
            {
                path: "insert-centre",
                component: InsertCentreComponent,
            },
            {
                path: "liste-role",
                component: ListeRoleComponent
            },
            {
                path: "insert-role",
                component: InsertRoleComponent,
            },
        ]
    }
]