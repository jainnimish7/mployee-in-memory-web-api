import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';

@Injectable()
export class SharedService {
  SERVER_URL = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.SERVER_URL + 'employees');
  }
}
