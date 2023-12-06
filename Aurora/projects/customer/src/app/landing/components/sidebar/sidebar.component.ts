import { Component,OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';
import { cibNativescript } from '@coreui/icons';
import IReadCategoriesDto from 'Dtos/Category/IReadCategoriesDto';
import { ProductcardComponent } from '../productcard/productcard.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories!:IReadCategoriesDto[];
  constructor(
    private service:LandingService,
    ){}
  
  ngOnInit(): void {
this.getAllCategories()
  }
  getAllCategories(){
    this.service.getAllCategories().subscribe((c:any)=>{
      this.categories = c;
      console.log(c);
    })
  }
  filter(category:IReadCategoriesDto){
    this.service.categoryChoosen = category;
    this.service.assignProducts();
  }
}
