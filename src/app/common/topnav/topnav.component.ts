import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-topnav',
  providers: [LoginService],
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private _service_login: LoginService) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this._service_login.cerrarSesion();
  }
}
