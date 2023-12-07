import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddImageINDb } from 'Dtos/Image/IAddImageINDb';
import IaddImg from 'Dtos/Image/IaddImg';
import { environment } from 'projects/customer/src/enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddImageService {

  constructor(private client : HttpClient) {}

    Upload (file : File):Observable<IaddImg>{
    const api = `${environment.apiUrl}/api/UploadFile`;
    var form = new FormData();
    form.append('file' , file );

    return this.client.post<IaddImg>(api , form);
  }

  uploadImg(uploadImage:IaddImg):Observable<IaddImg>{
    const apiUrl=`${environment.apiUrl}/api/Image/AddImage`
    return this.client.post<IaddImg>(apiUrl,uploadImage)
  }
  addImgToDb(addImg : IAddImageINDb) : Observable<IAddImageINDb>{
    const apiUrl=`${environment.apiUrl}/api/Image/AddImage`
    return this.client.post<IAddImageINDb>(apiUrl , addImg)
 }
}