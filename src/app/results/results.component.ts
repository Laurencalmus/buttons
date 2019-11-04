import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  candidateID: string = '';

  resultMessage = "Fix results";
  buttonTest(candidateID: string) {
    console.log(candidateID);
    this.candidateID = candidateID;
    return candidateID;
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
