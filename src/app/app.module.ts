import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
import { BrandPipePipe } from './pipes/brand-pipe.pipe';
import { FilterCarComponent } from './components/filter-car/filter-car.component';



@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ColorPipePipe,
    BrandPipePipe,
    FilterCarComponent,
  ],
  imports: [BrowserModule,BrowserAnimationsModule, AppRoutingModule, HttpClientModule,FormsModule,ToastrModule.forRoot({
    positionClass:"toast-bottom-right"
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
