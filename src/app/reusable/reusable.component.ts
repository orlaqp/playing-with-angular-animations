import { Component, OnInit } from '@angular/core';
import {
  useAnimation,
  trigger,
  style,
  transition
} from '@angular/animations';
import { pulseAnimation } from './animations';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css'],
  animations: [
    trigger('onPulse', [
      transition('normal => pulse', [
        useAnimation(pulseAnimation, {
          params: { timings: '0.3s', scale: '1.1' }
        })
      ])
    ])
  ]
})
export class ReusableComponent implements OnInit {
  state = 'normal'

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.state = 'out', 2000)
  }

  btnClick() {
    this.state = 'pulse';
  }

  done() {
    this.state = 'normal';
  }

}