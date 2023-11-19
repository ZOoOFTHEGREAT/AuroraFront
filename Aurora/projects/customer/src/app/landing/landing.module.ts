import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductcardComponent,
    ProductdetailsComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ]
})
export class LandingModule { }
