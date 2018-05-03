import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [LoginService],
})
export class MainComponent implements OnInit {

  constructor(private _service: LoginService) { }

  ngOnInit() {
    this._service.estaLogueado();
  }

}
