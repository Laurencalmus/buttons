import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css']
})
export class CertsComponent implements OnInit {

  certID: string = '';

  certMessage = "Fix certs";
  buttonTest() {
    this.certID= 'testingCertsButton';
  }

  constructor() { }

  ngOnInit() {
  }

}
