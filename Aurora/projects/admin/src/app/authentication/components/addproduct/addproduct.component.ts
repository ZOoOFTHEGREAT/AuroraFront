import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { UserService } from '../../../users/services/user.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ILogin } from 'Dtos/User/ILogin';
import { IAddProductDto } from 'Dtos/Product/IAddProductDto';
import { AddImageService } from '../../../Images/services/add-image.service';
import { IAddImageINDb } from 'Dtos/Images/IAddImageINDb';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent {
  roleValue?: string;
  isExist?: string;
  userEmail?: string;
  addProductForm;
  prod?: IAddProductDto;
  imgUrl = '';
  status = false;
  constructor(
    private adminServ: AuthService,
    public fB: FormBuilder,
    private userServices: UserService,
    private router: Router,
    private addImg: AddImageService
  ) {
    this.addProductForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Price: new FormControl(0, [Validators.required]),
      Quantity: new FormControl(0, [Validators.required]),
      DiscountPercent: new FormControl(0, [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      CategoryId: new FormControl(0, [Validators.required]),
      // ImageUrl: new FormControl('', [Validators.required]),
      // ProductId: new FormControl(0, [Validators.required]),
    });
  }
  get Name() {
    return this.addProductForm.get('Name');
  }
  get Price() {
    return this.addProductForm.get('Price');
  }
  get Quantity() {
    return this.addProductForm.get('Quantity');
  }
  get DiscountPercent() {
    return this.addProductForm.get('DiscountPercent');
  }
  get Description() {
    return this.addProductForm.get('Description');
  }
  get CategoryId() {
    return this.addProductForm.get('CategoryId');
  }
  UploadPhoto(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.addImg.Upload(file).subscribe({
      next: (reposne) => {
        this.imgUrl = reposne.url;
        this.status = reposne.status;
      },
      error: (err) => console.log(err),
    });
  }
  HandleSumbit(e: Event) {
    e.preventDefault;
    if (this.addProductForm.invalid) return;
    let addProduct: IAddProductDto = {
      name: this.addProductForm.value.Name!,
      price: this.addProductForm.value.Price!,
      discountPercent: 0,
      quantity: this.addProductForm.value.Quantity!,
      description: this.addProductForm.value.Description!,
      categoryId: this.addProductForm.value.CategoryId!,
    };

    this.adminServ.addProduct(addProduct).subscribe({
      next: (prod) => this.router.navigateByUrl('/'),
      error: (err) => console.log(err),
    });
  }
}
