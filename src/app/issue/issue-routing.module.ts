import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueFourComponent } from '../issue-four/issue-four.component';
import { IssueOneComponent } from '../issue-one/issue-one.component';
import { IssueThreeComponent } from '../issue-three/issue-three.component';
import { IssueTwoComponent } from '../issue-two/issue-two.component';
import { IssueComponent } from './issue.component';

const routes: Routes = [
  {
    path: '',
    component: IssueComponent,
    children: [
      {
        path: '',
        redirectTo: 'issue-one',
        pathMatch: 'full',
      },
      {
        path: 'issue-one',
        component: IssueOneComponent,
      },
      {
        path: 'issue-two',
        component: IssueTwoComponent,
      },
      {
        path: 'issue-three',
        component: IssueThreeComponent,
      },
      {
        path: 'issue-four',
        component: IssueFourComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssueRoutingModule {}
