import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor() { }

  companies: Company[] = [
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

  ngOnInit() {
  }

}
