import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
<<<<<<< Updated upstream
import { SidebarComponent } from './components/sidebar/sidebar.component';
=======
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

>>>>>>> Stashed changes


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductcardComponent,
    ProductdetailsComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
<<<<<<< Updated upstream
    FooterComponent,
    SidebarComponent,
=======
    ProductcardComponent,
>>>>>>> Stashed changes
  ]
})
export class LandingModule { }
