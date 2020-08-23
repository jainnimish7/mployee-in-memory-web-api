import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
const SERVER_URL = 'http://localhost:8080/api/';

@Injectable()
export class SharedService {
  constructor(private http: HttpClient) { }

  // Get list of all employees
  public getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(SERVER_URL + 'employees');
  }
}
