import { Component } from '@angular/core';
import { AddImageService } from '../../services/add-image.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IAddImageINDb } from 'Dtos/Images/IAddImageINDb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css'],
})
export class AddImageComponent {
  imgUrl?: string;
  status = false;
  form;

  constructor(private imageService: AddImageService, private router: Router) {
    this.form = new FormGroup({
      imageUrl: new FormControl<string>(''),
      productId: new FormControl<number>(0),
    });
  }
  get imageUrl() {
    return this.form.get('imageUrl');
  }
  get productId() {
    return this.form.get('productId');
  }

  UploadPhoto(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.imageService.Upload(file).subscribe({
      next: (reposne) => {
        this.imgUrl = reposne.url;
        this.status = reposne.status;
        this.form.patchValue({ imageUrl: this.imgUrl });
      },
      error: (err) => console.log(err),
    });
    console.log(this.imgUrl);
  }
  // addProductWithPhoto(e : Event){
  //   const input = e.target as HTMLInputElement ;
  //   const Img = input.files?.[0];
  //   if(!Img) return ;
  //   this.imageService.
  // }

  addProduct(e: Event) {
    e.preventDefault();

    console.log(this.form.value);
  }

  HandleSumbit(e: Event) {
    e.preventDefault;
    if (this.form.invalid) return;
    let addImg: IAddImageINDb = {
      imageUrl: this.imgUrl!,
      productId: this.form.value.productId!,
    };

    this.imageService.addImgToDb(addImg).subscribe({
      next: (img) => this.router.navigateByUrl('/'),
      error: (err) => console.log(err),
    });
  }
}
