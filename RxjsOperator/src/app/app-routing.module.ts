import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path:'promise', component:PromiseComponent},
  {path:'observable', component:ObservableComponent,children:[
    {path:'', component:ListComponent},
    {path:'fromEvent',component:FromEventComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
