import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-query-stagger',
  templateUrl: './query-stagger.component.html',
  styleUrls: ['./query-stagger.component.css'],
  animations: [
    trigger('entering1', [
      transition(':enter', [
        query('.form', [
           style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('entering2', [
      transition(':enter', [
        query('.form', [
           style({opacity: 0, transform: 'translateY(100px)'}),
          stagger(100, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class QueryStaggerComponent implements OnInit {
  // @HostBinding('@pageAnimations')
  // animatePage = true;
   start = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.start = true, 1000);
  }

}