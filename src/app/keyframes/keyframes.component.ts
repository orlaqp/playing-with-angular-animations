import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  state,
  style,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.css'],
  animations: [
    trigger('state', [
      transition('* => active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'orange' }),
        ]))
      ]),
      transition('* => inactive', [
        animate('2s', keyframes([
          style({ backgroundColor: 'orange' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'blue' }),
        ]))
      ]),
      // transition('* => *', [
      //   animate('2s', keyframes ( [
      //     style({ opacity: 0.1, offset: 0.1 }),
      //     style({ opacity: 0.6, offset: 0.2 }),
      //     style({ opacity: 1,   offset: 0.5 }),
      //     style({ opacity: 0.2, offset: 0.7, width: '100px' })
      //   ]))
      // ])
    ]),
  ]
})
export class KeyframesComponent implements OnInit {
  state = 'active';

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}