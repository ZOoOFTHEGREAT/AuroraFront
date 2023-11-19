import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';



@NgModule({
  declarations: [
    UserdetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserdetailsComponent
  ]
})
export class UsersModule { }
