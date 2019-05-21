import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { tap, takeWhile, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor(private companySvc: CompanyService) {
  }

  companies$: Observable<Company[]>;

  ngOnInit() {
    this.companies$ = this.companySvc.getCompanies()
    //   .pipe(map(c => c.sort((a, b) => {
    //     if (a.name < b.name) { return -1; }
    //     if (a.name > b.name) { return 1; }
    //     return 0;
    // })))
    ;
  }



}
