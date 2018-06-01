import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class TopnavService {

  constructor(private _router: Router, private _http: HttpClient) { }

  buscar() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    const body = JSON.stringify({
      'user' : localStorage.getItem('user')
    });
    return this._http.post(environment.urlApi + environment.modulos.modulos.modulos, body, {headers: headers})
      .toPromise()
      .then(response => this.handleSuccess(response))
      .catch(error => this.handleError(error));
  }
  private handleSuccess(response: any): Promise<any> {
    return Promise.resolve(response);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }
}
