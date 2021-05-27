import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUri = 'http://localhost:4200/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  
  addDVD(data): Observable<any> {
    const url = `${this.baseUri}/addDVD`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }
  
  getDVD(id): Observable<any> {
	const url = `${this.baseUri}/getDVD/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }  
  
  getAllDVDs(email) {
    return this.http.get(`${this.baseUri}/getAllDVDs/${email}`);
  }
  
  updateDVD(id, data): Observable<any> {
    const url = `${this.baseUri}/updateDVD/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }
  
  deleteDVD(id): Observable<any> {
    const url = `${this.baseUri}/deleteDVD/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }
  
  addUser(data): Observable<any> {
	const url = `${this.baseUri}/addUser`;
	return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }
  
  getUser(email): Observable<any> {
	const url = `${this.baseUri}/getUser/${email}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }  
  
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}  