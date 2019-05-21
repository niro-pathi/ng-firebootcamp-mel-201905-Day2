import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(): Company[] {
    return [
      {
        name: 'SSW',
        phone: 12345,
        email: 'info@ssw.com.au'
      },
      {
        name: 'Microsoft',
        phone: 456845,
        email: 'info@microsoft.com.au'
      },
      {
        name: 'Google',
        phone: 45858,
        email: 'info@google.com.au'
      }
    ];
  }
}
