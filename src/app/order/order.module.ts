import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderOneComponent } from '../order-one/order-one.component';
import { OrderTwoComponent } from '../order-two/order-two.component';
import { OrderThreeComponent } from '../order-three/order-three.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderOneComponent,
    OrderTwoComponent,
    OrderThreeComponent,
  ],
  imports: [CommonModule, OrderRoutingModule, SharedModule],
})
export class OrderModule {}
