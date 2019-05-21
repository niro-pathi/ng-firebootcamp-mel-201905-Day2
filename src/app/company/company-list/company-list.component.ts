import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { tap, takeWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  componentExists = true;

  constructor(private companySvc: CompanyService) {
  }

  companies: Company[];

  ngOnInit() {
    this.companySvc.getCompanies()
      .pipe(
        takeWhile(c => this.componentExists),
        tap(c => console.log(`Tap got ${c.length} companies`))
      )
      .subscribe(
        next => this.companies = next,
        error => console.error('ERROR', error),
        () => console.log('Complete')
      );

  }

  ngOnDestroy() {
    this.componentExists = false;
  }

}
