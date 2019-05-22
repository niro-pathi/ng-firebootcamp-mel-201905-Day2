import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, retry, tap } from 'rxjs/operators';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) { 
    this.loadCompanies();
  }

  API_BASE = environment.API_BASE;

  companies$: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([]);

  loadCompanies() {
    this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      // retry(10),
      catchError(e => this.errorHandler<Company[]>(e)),
    ).
    subscribe(companies => this.companies$.next(companies));
  }

  getCompanies(): Observable<Company[]> {
    return this.companies$;
  }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${companyId}`
    ).pipe(catchError(e => this.errorHandler<Company>(e)));
  }

  deleteCompany(company: Company) {
    console.log('Delete Company', company.id);
    this.httpClient.delete<Company>(`${this.API_BASE}/company/${company.id}`)
    .pipe(
      // retry(10),
      tap(c => console.log("HttpClient.delete called")),
      catchError(e => this.errorHandler<Company>(e)),
    ).subscribe(c => this.loadCompanies());
  }

  updateCompany(company: Company) {
    console.log("Update Company", company.id);
    this.httpClient.put<Company>(`${this.API_BASE}/company/${company.id}`,company,
    { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(e => this.errorHandler<Company>(e)),
    ).subscribe(c => this.loadCompanies());
  }

  addCompany(company: Company) {
    this.httpClient.post<Company>(`${this.API_BASE}/company`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(e => this.errorHandler<Company>(e)),
    ).subscribe(c => this.loadCompanies());
  }

  errorHandler<T>(error: Error): Observable<T> {
    // TODO: Implement proper error handler (Toaster...)
    console.error('ERROR', error);

    return new Observable<T>();
  }
}
