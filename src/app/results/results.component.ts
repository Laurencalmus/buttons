import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  candidateID: string = '';

  resultMessage = "Fix results";
  buttonTest() {
    this.candidateID= 'testingResultsButton';
  }

  constructor() { }

  ngOnInit() {
  }

}
