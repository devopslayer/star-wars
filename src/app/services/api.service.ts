import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  fetchPlanets(url: string = `${this.apiUrl}/planets`): Observable<any> {
    return this.http.get<any>(url);
  }

  fetchMorePlanets(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  fetchResident(residentUrl: string): Observable<any> {
    return this.http.get<any>(residentUrl);
  }

}
