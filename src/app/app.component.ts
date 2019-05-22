import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from './company/company.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebootcamp-crm';

  companiesCount$: Observable<number>;

  constructor(
    private companyService: CompanyService 
  ){}
   
  ngOnInit() {
    this.companiesCount$ = this.companyService.getCompanies()
    .pipe(map(list => list.length));
  }
}
