import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailedComponent } from './car-detailed/car-detailed.component';
import { CarComparisonComponent } from './car-comparison/car-comparison.component';

const routes: Routes = [
  { path: '', component: CarListComponent},
  { path: 'details/:id', component: CarDetailedComponent},
  { path: 'compare', component: CarComparisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
