import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  //{ path: 'filter/:brandId/:colorId', component: CarComponent },

  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/details/:carId', component: CarDetailComponent },
  { path: 'detail/:carId', component: CarDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
