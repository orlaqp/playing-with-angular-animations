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
import { QueryStaggerComponent } from './query-stagger/query-stagger.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'transitions', component: TransitionsComponent },
      { path: 'void-state', component: VoidAnimationsComponent },
      { path: 'keyframes', component: KeyframesComponent },
      { path: 'query', component: QueryStaggerComponent },
      { path: 'other', component: OtherComponent }
    ])
  ],
  declarations: [ AppComponent, HelloComponent, OtherComponent, TransitionsComponent, VoidAnimationsComponent, KeyframesComponent, QueryStaggerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
