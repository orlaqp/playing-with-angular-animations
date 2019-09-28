import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-void-animations',
  templateUrl: './void-animations.component.html',
  styleUrls: ['./void-animations.component.css'],
  animations: [
    trigger('inOut', [
      // entering and leaving
      // state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition(':leave', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ]),
  ]
})
export class VoidAnimationsComponent implements OnInit {
  products;

  constructor() { }

  ngOnInit() {
  }

  loadProducts() {
    this.products = [
      { name: 'Keyboard', price: 10 },
      { name: 'Mouse', price: 20 },
      { name: 'CPU', price: 30 }
    ];
  }

  removeProduct(product) {
    this.products = this.products.filter(p => p !== product);

    if (!this.products.length) this.products = undefined;
  }

}