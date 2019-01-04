import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailedComponent } from './car-detailed/car-detailed.component';

const routes: Routes = [
  { path: '', component: CarListComponent},
  { path: 'details/:id', component: CarDetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
