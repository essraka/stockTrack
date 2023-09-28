import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getProduct() {
    return this.http.get<any>(`${this.baseUrl}product`);
  }

  addProduct(data: any): Observable<any> {

    return this.http.post<any>(`${this.baseUrl}product`, {
      "groupId": data.groupId,
      "name": data.name,
      "code": data.code,
      "price": data.price,
      "count": data.count
    });
  }

  updateProduct(data: any): Observable<any> {

    return this.http.put<any>(`${this.baseUrl}product/${data.id}`, data);
  }

  deleteProduct(id: number): Observable<any> {

    return this.http.delete<any>(`${this.baseUrl}product/${id}`);
  }

}
