import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  sideNavOrderMenue = [
    { path: 'order-one', title: 'Order 1' },
    { path: 'order-two', title: 'Order 2' },
    { path: 'order-three', title: 'Order 3' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
