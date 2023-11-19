import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductcardComponent,
    ProductdetailsComponent,
    SidebarComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    CarouselModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ProductcardComponent,
    ProductdetailsComponent,
    SliderComponent,
  ]
})
export class LandingModule { }
