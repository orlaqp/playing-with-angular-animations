import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-transitions',
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.css'],
  animations: [
    trigger('changeLeft', [
      state('left', style({ position: 'relative', left: '0px' })),
      state('right', style({ position: 'relative', left: '50px' })),
      transition('left <=> right', [
        animate('0.5s')
      ])
    ])
  ],
})
export class TransitionsComponent implements OnInit {
  state = 'left';

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.state = this.state === 'left' ? 'right' : 'left';
  }

}