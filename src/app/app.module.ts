import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OtherComponent } from './other/other.component';
import { TransitionsComponent } from './transitions/transitions.component';
import { VoidAnimationsComponent } from './void-animations/void-animations.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { QueryStaggerComponent } from './query-stagger/query-stagger.component';
import { ParallelComponent } from './parallel/parallel.component';
import { FilterComponent } from './filter/filter.component';
import { ReusableComponent } from './reusable/reusable.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent, data: { animation: 'HomePage' } },
      { path: 'transitions', component: TransitionsComponent, data: { animation: 'BasicPage' } },
      { path: 'void-state', component: VoidAnimationsComponent },
      { path: 'keyframes', component: KeyframesComponent },
      { path: 'query', component: QueryStaggerComponent },
      { path: 'parallel', component: ParallelComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'reusable', component: ReusableComponent },
      { path: 'other', component: OtherComponent, data: { animation: 'OtherPage'} }
    ])
  ],
  declarations: [ AppComponent, HelloComponent, OtherComponent, TransitionsComponent, VoidAnimationsComponent, KeyframesComponent, QueryStaggerComponent, ParallelComponent, FilterComponent, ReusableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
