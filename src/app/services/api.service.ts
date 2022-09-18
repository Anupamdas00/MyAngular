import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  hello(){
    console.log("hello guys");
    
  }
  getNews(){
    return this.http.get<any>(
      'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1265ffa34eca42a2b853b9d3797b49a1'
    ).pipe(map((res: any) => {
      return res;
    }));
  }
}
