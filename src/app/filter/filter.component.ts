import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate
} from '@angular/animations';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px', left: '35px', position: 'relative' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*', left: '0px' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          style({ position: 'relative', left: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px', left: '35px' })),
          ]),
        ])
      ]),
    ]),
  ]
})
export class FilterComponent implements OnInit {
  totalItems = -1;
  items = ['item1', 'item11', 'item2', 'item21', 'item3', 'item13'];
  query = new FormControl('');
  filteredItems$: Observable<string[]>;

  // @HostBinding('@filterAnimation')
  // animated = true;

  constructor() { }

  ngOnInit() {
    this.filteredItems$ = this.query.valueChanges.pipe(
      startWith(''),
      map(q => this.items.filter(i => i.indexOf(q) !== -1)),
      tap(items => this.totalItems = items.length)
    )
  }

}