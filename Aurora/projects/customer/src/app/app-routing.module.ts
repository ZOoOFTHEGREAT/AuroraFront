import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: 'Main',loadChildren:()=>import('./Components/Landing/Landing.module').then(x=>x.LandingModule)}(this is about lazy loading)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
