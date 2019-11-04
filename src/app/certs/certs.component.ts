import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css'],
})
export class CertsComponent implements OnInit {

  certID: string = '';

  certMessage = "Fix certs";
  buttonTest(certID:string) {
    console.log(certID);
    this.certID = certID;
    return certID;
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {

    /*// Simple GET request with response type <any>       //GET Request with URL
    this.http.get<any>('http://backoffice.ics.local/').subscribe(data => {
      this.totalAngularPackages = data;*/

  }    

}

/*cert id > results*/
