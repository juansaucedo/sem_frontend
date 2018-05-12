import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(
    private _router: Router, private _http: HttpClient
  ) { }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }

  login(user): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    const body = JSON.stringify(user);
    return this._http.post(environment.urlApi + environment.modulos.login.login, body, {headers: headers})
      .toPromise()
      .then(response => this.handleSuccess(response))
      .catch(error => this.handleError(error));
  }

  private handleSuccess(response: any): Promise<any> {
    localStorage.setItem('user', response.variables.id);
    localStorage.setItem('nombre', response.variables.nombre);
    localStorage.setItem('key', response.variables.key);
    return Promise.resolve(response);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }

  estaLogueado() {
    if (localStorage.getItem('user') === null) {
      this._router.navigate(['login']);
    }
  }

  cerrarSesion() {
    localStorage.clear();
    this._router.navigate(['login']);
  }
}
