import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  constructor() { }
  data: any[] = [
    { "cardname": "Maths Preparation" },
    { "cardname": "Working" },
    { "cardname": "Current Course" },
    { "cardname": "Protecting Ideas" },
    { "cardname": "Publication" },
    { "cardname": "Virtual Teaching Program" },
    { "cardname": "Field Trips, Events & Activities" },
    { "cardname": "BabyGap - June 2017" },
    { "cardname": "Wetland Workshop" },
    { "cardname": "The Schwinn Cycling International" },
    { "cardname": "Combine Study" },
    { "cardname": "Visit Standford" },
    { "cardname": "Attention all Fit Pros:" },
    { "cardname": "How to Become a Certified Trainer" },
    { "cardname": "HIIT the Competition Before anyone else does" },
    { "cardname": "Eat less of dairy products and nuts" },
    { "cardname": "Stress Less, Sleep More" },
    { "cardname": "Review Any Medications" },
    { "cardname": "Measure Your Progress Wisely" },
    { "cardname": "Achieve Optimal Ketosis" }
  ];
  // .fill(5)
  // .map((x, i) => i);


  ngOnInit() {
  }

}
