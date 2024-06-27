import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';
import { FirstLogService } from '../first-log/first-log.service';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export const roleAuthGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);
    const loginService = inject(LoginService);
    const firstLogService = inject(FirstLogService);

    return new Promise<boolean>((resolve, reject) => {
        forkJoin({
            user: loginService.getUser(),
            verify: firstLogService.verifyUser(),
            role: loginService.getUserRole()
        }).subscribe(
            ({ user, verify, role }) => {
                if (user === null) {
                    router.navigateByUrl('/');
                    resolve(false);
                    return;
                }

                if (verify.verify === 'not authentified') {
                    router.navigateByUrl('/first-log');
                    resolve(false);
                    return;
                }

                console.log(role)
                switch (role.role) {
                    case 'Super administrateur':
                        console.log("haha")
                        router.navigateByUrl('/admin/liste-client-admin');
                        resolve(true);
                        break;
                    case 'Ressources humaines':
                        resolve(true);
                        break;
                    case 'Agent d\'accueil':
                        router.navigateByUrl('/agent-accueil');
                        resolve(true);
                        break;
                    case 'Medecin':
                        resolve(true);
                        break;
                }
                resolve(true);
            },
            error => {
                console.log(error);
                resolve(false);
            }
        );
    });
};
