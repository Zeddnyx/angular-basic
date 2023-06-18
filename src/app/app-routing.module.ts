import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { RoutingOtherComponent } from './routing-other/routing-other.component';
import { RoutingSingleComponent } from './routing-single/routing-single.component';

const routes: Routes = [
  {
    path: 'route',
    component: RoutingComponent,
  },
  {
    path: 'route-other',
    component: RoutingOtherComponent,
  },
  {
    path: 'route-single/:id',
    component: RoutingSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
