import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTowComponent } from './home-tow/home-tow.component';
import { HomeThreeComponent } from './home-three/home-three.component';
import { SharedModule } from './shared/shared.module';
import { OrderOneComponent } from './order-one/order-one.component';
import { OrderTwoComponent } from './order-two/order-two.component';
import { OrderThreeComponent } from './order-three/order-three.component';
import { IssueOneComponent } from './issue-one/issue-one.component';
import { IssueTwoComponent } from './issue-two/issue-two.component';
import { IssueThreeComponent } from './issue-three/issue-three.component';
import { IssueFourComponent } from './issue-four/issue-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeOneComponent,
    HomeTowComponent,
    HomeThreeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
