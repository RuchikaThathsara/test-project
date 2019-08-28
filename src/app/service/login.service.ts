import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  isAuthenticated(): Observable<null> {
    return this.http.get<null>(this.BASE_URL + '/isAuth', {withCredentials: true});
  }

  authenticate(username: string, password: string): Observable<null> {
    return this.http.post<null>(this.BASE_URL + '/authenticate',
      new HttpParams().set('username', username)
        .set('password', password),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        withCredentials: true
      }
    );
  }

  logout(): Observable<null> {
    return this.http.get<null>(this.BASE_URL + '/logout', {withCredentials: true});
  }
}
