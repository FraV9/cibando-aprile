import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBseUrl = 'api/users';

  constructor(private http: HttpClient, private userService: UserService) { }

  login(email: string, password: string): Observable<any> {

    const user = {
       email: email,
       password: password
      };

    return this.http.post<any>(`${this.apiBseUrl}/login`, user);
  }

  saveStorage(res: any) {

    const user = {
      name: res.name,
      email: res.email,
      password: res.password,
    }

    this.userService.userRole.next(res.role);
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogged(): boolean {

    return JSON.parse(localStorage.getItem('user')) !== null;

  }

  logout(): void {

    localStorage.removeItem('user');
    this.userService.userRole.next('');

    // per svuotare una localStorage si può anche usare il metodo clear, ma questo svuota ogni campo presente

  }
}
