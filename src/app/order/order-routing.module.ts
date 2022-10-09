import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderOneComponent } from '../order-one/order-one.component';
import { OrderThreeComponent } from '../order-three/order-three.component';
import { OrderTwoComponent } from '../order-two/order-two.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: '',
        redirectTo: 'order-one',
        pathMatch: 'full',
      },
      {
        path: 'order-one',
        component: OrderOneComponent,
      },
      {
        path: 'order-two',
        component: OrderTwoComponent,
      },
      {
        path: 'order-three',
        component: OrderThreeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
