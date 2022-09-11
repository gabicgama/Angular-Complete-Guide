import { Component, OnInit } from '@angular/core';

@Component({
  //selecttor: 'app-servers', //default
  //selector: '[app-servers]', //atributo
  selector: '.app-servers', //classe
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
