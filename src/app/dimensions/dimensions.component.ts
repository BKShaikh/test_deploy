import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data: any[] = [
    { "cardname": "Default" },
    { "cardname": "Work" },
    { "cardname": "Health" },
    { "cardname": "Education" },
    { "cardname": "Family" }
  ];
}
