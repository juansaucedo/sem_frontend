import {Component, Input, OnInit} from '@angular/core';

export class Alerts {
  constructor(
    public titulo: string,
    public mensaje: string,
    public cerrar: boolean,
    public tipo: string,
  ) {}
}
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  @Input() titulo: string;
  @Input() tipo: string;
  @Input() mensaje: string;
  constructor() { }

  ngOnInit() {
  }
}
