import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './landing/components/main-layout/main-layout.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductdetailsComponent } from './landing/components/productdetails/productdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { accountsettingGuard } from './authentication/accountsetting.guard';
import { PlaceorderComponent } from './cart/components/placeorder/placeorder.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainLayoutComponent },

  {
    path: 'authuntication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'accountsetting',
    canActivate: [accountsettingGuard],
    loadChildren: () =>
      import('./account-setting/account-setting.module').then(
        (m) => m.AccountSettingModule
      ),
  },
  { path: 'cart', component: CartComponent },
  { path: 'placeorder', component: PlaceorderComponent },
  { path: 'product/:Id', component: ProductdetailsComponent },
  // {path:'orderhistory',component:}
  // {path:'placeorder',component:}

  //{path: 'Main',loadChildren:()=>import('./Components/Landing/Landing.module').then(x=>x.LandingModule)}(this is about lazy loading)*/
  // { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
