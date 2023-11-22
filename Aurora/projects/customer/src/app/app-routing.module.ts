import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './landing/components/main-layout/main-layout.component';
import { LoginformComponent } from './authentication/components/loginform/loginform.component';
import { RegisterformComponent } from './authentication/components/registerform/registerform.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductdetailsComponent } from './landing/components/productdetails/productdetails.component';
import { AccountsettingComponent } from './account-setting/accountsetting/accountsetting.component';
import { UseraddressesComponent } from './account-setting/account-setting-components/useraddresses/useraddresses.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'accountsetting', component: AccountsettingComponent },
  { path: 'home', component: MainLayoutComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'register', component: RegisterformComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductdetailsComponent },
  { path: 'addresses', component: UseraddressesComponent },
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
