import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IssueComponent } from './issue.component';
import { IssueRoutingModule } from './issue-routing.module';
import { IssueOneComponent } from '../issue-one/issue-one.component';
import { IssueThreeComponent } from '../issue-three/issue-three.component';
import { IssueTwoComponent } from '../issue-two/issue-two.component';
import { IssueFourComponent } from '../issue-four/issue-four.component';

@NgModule({
  declarations: [
    IssueComponent,
    IssueOneComponent,
    IssueThreeComponent,
    IssueTwoComponent,
    IssueFourComponent,
  ],
  imports: [CommonModule, IssueRoutingModule, SharedModule],
})
export class IssueModule {}
