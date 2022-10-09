import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeThreeComponent } from './home-three/home-three.component';
import { HomeTowComponent } from './home-tow/home-tow.component';
import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home', // pappa router
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home-one',
        pathMatch: 'full',
      },
      {
        path: 'home-one',
        component: HomeOneComponent,
      },
      {
        path: 'home-two',
        component: HomeTowComponent,
      },
      {
        path: 'home-three',
        component: HomeThreeComponent,
      },
    ],
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'issue',
    loadChildren: () =>
      import('./issue/issue.module').then((m) => m.IssueModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
