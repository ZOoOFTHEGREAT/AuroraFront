import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductcardComponent,
    ProductdetailsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class LandingModule { }
