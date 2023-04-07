import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl = 'api/users';

  datiUtente = new ReplaySubject;

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<User> {
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, user);
  }
}
