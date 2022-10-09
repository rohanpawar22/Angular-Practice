import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  sideNavIssueMenueOne = [
    { path: 'issue-one', title: 'Issue 1' },
    { path: 'issue-two', title: 'Issue 2' },
  ];

  sideNavIssueMenueTwo = [
    { path: 'issue-three', title: 'Issue 3' },
    { path: 'issue-four', title: 'Issue 4' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
