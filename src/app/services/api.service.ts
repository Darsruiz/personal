import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, map, throwError } from 'rxjs';
import { API } from 'src/environments/api_variables';
import { IRepository } from '../interfaces/repository';
import { ITabInfo } from '../interfaces/tab-info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRepos(): Observable<IRepository[]> {
    return this.http
      .get<IRepository[]>(API.repos)
      .pipe(retry(1), catchError(this.handleError));
  };

  getTabInfo(): Observable<ITabInfo[]> {
    return this.http.get<ITabInfo[]>(API.tabInfo)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      alert(`Error Obtaining Data: ${errorMessage}`)
    });
  }
}
