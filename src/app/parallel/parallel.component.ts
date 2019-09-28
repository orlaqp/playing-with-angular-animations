import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  state,
  style,
  animate,
  group
} from '@angular/animations';

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styleUrls: ['./parallel.component.css'],
  animations: [
     trigger('flyInOut', [
    state('in', style({
      width: 150,
      transform: 'translateX(0)', opacity: 1
    })),
    transition('void => *', [
      style({ width: 80, transform: 'translateX(50px)', opacity: 0 }),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: 120
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
]
})
export class ParallelComponent implements OnInit {

   start = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.start = true, 100);
  }

}