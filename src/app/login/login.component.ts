import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {Alerts} from '../common/alerts/alerts.component';

export class User {
  constructor(
    public user: string,
    public pass: string) { }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public user = new User('', '');
  public alerts = [];
  constructor(private _router: Router, private _login_service: LoginService) { }

  login() {
    if (this.user.user !== '' && this.user.pass !== '') {
      this._login_service
        .login(this.user)
        .then(response => {
            if (response.status === true) {
              this.alerts.push(new Alerts('Sesión iniciada', response.mensaje, true, 'success'));
              this._router.navigate(['']);
            } else {
              this.alerts.push(new Alerts('Error', response.mensaje, true, 'danger'));
            }
          }, error => {
            this.alerts.push(new Alerts('Error', 'Revisa el siguiente mensaje: ' + error.message, true, 'danger'));
          }
        );
    } else {
      this.alerts.push(new Alerts('Error', 'Llena todos los datos correctamente', true, 'warning'));
    }
  }

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this._router.navigate(['']);
    }
  }

}
