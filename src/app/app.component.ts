import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('initialToRight', [
      state('initial', style({ position: 'relative', left: '0px' })),
      state('toRight', style({ position: 'relative', left: '50px' })),
      transition('initial <=> toRight', [
        animate('0.5s')
      ])
    ]),
    trigger('inOut', [
      // entering and leaving
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('openClose', [
      state('true', style({ height: '*', overflow: 'hidden' })),
      state('false', style({ height: '0px', overflow: 'hidden' })),
      transition('false <=> true', animate(500))
    ])
  ]
})
export class AppComponent  {
  name = 'Angular';
  state = 'initial';
  isOpen = true;

  toggle() {
    this.state = this.state === 'toRight' ? 'initial' : 'toRight';
    this.isOpen = !this.isOpen;
  }
}
