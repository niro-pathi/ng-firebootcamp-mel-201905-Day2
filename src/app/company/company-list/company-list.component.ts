import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  sub: Subscription;

  constructor(private companySvc: CompanyService) {
  }

  companies: Company[];

  ngOnInit() {
    this.sub = this.companySvc.getCompanies()
      .pipe(
        tap(c => console.log(`Tap got ${c.length} companies`))
      )
      .subscribe(
        next => this.companies = next,
        error => console.error('ERROR', error),
        () => console.log('Complete')
      );

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
