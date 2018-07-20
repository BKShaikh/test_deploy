import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor() { }
  data: any[] = [
    { "cardname": "Sample Goals:Increase Yearly Income by $3000" },
    { "cardname": "Sample Goal:Reduce weight by 8 lbs" },
    { "cardname": "Sample Goal:Get Grade A in High School Algebra" },
    { "cardname": "Sample Goal:Camping at Yosemite" },
    { "cardname": "Gain Weight" },
    { "cardname": "Copy of Maths Preparation" }
  ];
  ngOnInit() {
  }

}
