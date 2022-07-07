import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProduct() {
    /*https://fakestoreapi.com/products */
    return this.http
      .get('https://www.mocky.io/v2/5eda4003330000740079ea60')
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  }
}
