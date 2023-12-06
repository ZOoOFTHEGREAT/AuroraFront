import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';
import IProductDetails from 'Dtos/Product/IProductDetails';
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  public products!:IProductDetails[];
  constructor(private service:LandingService){}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: (allproducts)=>{this.products = allproducts;
        console.log(allproducts)
      },
      error:(error)=>console.log(error),
    })

  }
  // choosingACategory(){
  //   this.products = this.service.categoryChoosen.products;
  //   console.log(this.products)
  // }
  }


  // this.service.getAllProducts().subscribe((allproducts:IProductDetails[])=>{
  //   this.products = allproducts;
  //   console.log(allproducts);