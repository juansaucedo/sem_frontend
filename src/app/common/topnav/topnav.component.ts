import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login/login.service';
import {TopnavService} from './topnav.service';

@Component({
  selector: 'app-topnav',
  providers: [LoginService, TopnavService],
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  public modulos = [];
  constructor(private _service_login: LoginService, private _service_topnav: TopnavService) { }

  ngOnInit() {
    this._service_topnav
      .buscar()
      .then(response => {
        if (response.status === true) {
          this.modulos = response.vars.modulos;
          for (let i = 0; i < response.vars.modulos.length; i++) {
            response.vars.modulos[i]['submodulos'] = [];
          }
          response.vars.submodulos.forEach(function(submodulo){
            const index = response.vars.modulos.findIndex(function (item, i) {
              return item.id === submodulo.modulo;
            });
            if (index !== -1) {
              response.vars.modulos[index].submodulos.push(submodulo);
            }
          });
        }
      }, error => {
        console.log(error);
      });
  }

  cerrarSesion() {
    this._service_login.cerrarSesion();
  }
}
