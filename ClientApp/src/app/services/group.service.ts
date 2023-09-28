import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
 
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getGroups() {
    return this.http.get<any>(`${this.baseUrl}group`);
  }

  addGroup(data: any) : Observable<any> {

    return this.http.post<any>(`${this.baseUrl}group`, {
    "name": data.name,
    "code": data.code
    });
  }

  updateGroup(data: any) : Observable<any> {

    return this.http.put<any>(`${this.baseUrl}group/${data.id}`, data);
  }

  deleteGroup(id: number) : Observable<any> {

    return this.http.delete<any>(`${this.baseUrl}group/${id}`);
  }

}
