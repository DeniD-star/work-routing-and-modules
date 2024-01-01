import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //pri service we use just HttpClient, pri module HttpClientModule, both we introduce it from @angular/common/http
  constructor(private http: HttpClient) { }

  getThemes(){
    const {appUrl} = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`)
  }
  getPosts(limit?:number){
    const {appUrl} = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Post[]>(`${appUrl}/posts${limitFilter}`)
  }
}
