import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
 
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getGroups() {
    return this.http.get<any>(this.baseUrl + 'group');
  }
}
