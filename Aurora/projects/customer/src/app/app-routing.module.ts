import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './landing/components/navbar/navbar.component';
import {ProductcardComponent} from './landing/components/productcard/productcard.component'

const routes: Routes = [
  /*path: 'landing', component: NavbarComponent, children: [

    { path: 'product', component: ProductcardComponent },
  ] ,
  {path:'**',redirectTo:'landing'},
  //{path: 'Main',loadChildren:()=>import('./Components/Landing/Landing.module').then(x=>x.LandingModule)}(this is about lazy loading)*/
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
