import { Component } from '@angular/core';
import { AddImageService } from '../../services/add-image.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent {
imgUrl = '';
status=false;
form;
constructor(private imageService : AddImageService) {
 this.form= new FormGroup({
    name : new FormControl<string>(''),
    quantity : new FormControl<number>(0),
    imageUrl : new FormControl<string>(''),
 });
}


UploadPhoto(e : Event){
  const input = e.target as HTMLInputElement ;
  const file = input.files?.[0];
if(!file) return ;
  this.imageService.Upload(file).subscribe({
    next:(reposne)=>{
      
this.imgUrl=reposne.url
this.status=reposne.status
      this.form.patchValue({imageUrl : this.imgUrl})
    },error:(err)=>console.log(err)
  });
  console.log(this.imgUrl);
}
// addProductWithPhoto(e : Event){
//   const input = e.target as HTMLInputElement ;
//   const Img = input.files?.[0];
//   if(!Img) return ;
//   this.imageService.
// }

addProduct(e : Event){
  e.preventDefault();
 
  console.log(this.form.value)
}
}
