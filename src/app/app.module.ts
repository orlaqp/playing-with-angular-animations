import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OtherComponent } from './other/other.component';
import { TransitionsComponent } from './transitions/transitions.component';
import { VoidAnimationsComponent } from './void-animations/void-animations.component';
import { KeyframesComponent } from './keyframes/keyframes.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'transitions', component: TransitionsComponent },
      { path: 'void-state', component: VoidAnimationsComponent },
      { path: 'other', component: OtherComponent }
    ])
  ],
  declarations: [ AppComponent, HelloComponent, OtherComponent, TransitionsComponent, VoidAnimationsComponent, KeyframesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
