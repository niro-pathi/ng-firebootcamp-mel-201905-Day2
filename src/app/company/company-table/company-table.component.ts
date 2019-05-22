import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COMMON_DEPRECATED_I18N_PIPES } from '@angular/common/src/pipes/deprecated';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})

export class CompanyTableComponent implements OnInit {

  @Input()
  companies: Company[];

  @Output()
  deleteClicked: EventEmitter<Company> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteCompany(company: Company) {
    this.deleteClicked.emit(company);
  }

}