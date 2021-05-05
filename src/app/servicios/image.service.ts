import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  pagePhoto: any;
  constructor(private http: HttpClient) { }

  getImg() {

    return this.http.get('https://pixabay.com/api/?key=21351108-e70e13da005029798b867e59c&q=yellow+flowers&image_type=photo&category=nature&safesearch=true');

  }
}
