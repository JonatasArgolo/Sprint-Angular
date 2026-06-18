import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInf } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient)
  login(nome: string, senha: string): Observable<UserInf> {
    return this.http.post<UserInf>("http://localhost:3001/login",{ nome, senha })
  }
}
