import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    public sendPassword() {

        // tslint:disable-next-line:max-line-length
        Swal.fire('Operación exitosa!', 'La nueva contraseña ha sido enviada al correo diligenciado. Esta contraseña la puede modifcar una vez ingresado al sistema.', 'success');

        this.router.navigateByUrl('login');
    }
}
