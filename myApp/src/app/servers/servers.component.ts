import { Component, OnInit } from '@angular/core';

@Component({
  //selecttor: 'app-servers', //default
  //selector: '[app-servers]', //atributo
  selector: '.app-servers', //classe
  templateUrl: './servers.component.html',
  //template: `
  //<app-server></app-server>
  //<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "TestServer";
  serverCreated = false;
  servers = ['server1', 'server2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created!!!! Name is: " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
