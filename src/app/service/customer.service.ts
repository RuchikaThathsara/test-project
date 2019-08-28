import {Injectable} from '@angular/core';
import {Customer} from '../dto/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly baseUrl = environment.apiUrl + '/customers';

  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl, {withCredentials: true});
  }

  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, customer, {withCredentials: true});
  }
}
