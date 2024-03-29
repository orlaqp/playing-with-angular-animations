import {
  animation,
  state,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const pulseAnimation = animation([
  style({ transform: 'scale(1)' }),
  animate('{{ timings }}', keyframes([
    style({ transform: 'scale(1)', offset: 0 }),
    style({ transform: 'scale({{ scale }})', offset: .5 }),
    style({ transform: 'scale(1)', offset: 1 }),
  ]))
])