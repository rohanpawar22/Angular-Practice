import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sideNavHomeMenue = [
    { path: 'home-one', title: 'Home 1' },
    { path: 'home-two', title: 'Home 2' },
    { path: 'home-three', title: 'Home 3' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
