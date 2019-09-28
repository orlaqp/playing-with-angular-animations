import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [

    
    trigger('openClose', [
      state('true', style({ height: '*', overflow: 'hidden' })),
      state('false', style({ height: '0px', overflow: 'hidden' })),
      transition('false <=> true', animate(500))
    ]),
    
    trigger('openClose2', [
      state('open', style({
        height: '30px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('close', style({
        // height: '60px',
        opacity: 0.5,
        backgroundColor: 'blue'
      })),
      // ...
      
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

  onAnimationEvent ( event: AnimationEvent ) {
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 or 1 second
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
}
