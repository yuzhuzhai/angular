import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  salesPersonList: SalesPerson[] = [
    new SalesPerson("fuqiang", "zhai", "zfq@gmail.com", 100),
    new SalesPerson("fuqiang2", "zhai2", "zfq2@gmail.com", 200),
    new SalesPerson("fuqiang3", "zhai3", "zfq3@gmail.com", 300),
    new SalesPerson("fuqiang4", "zhai4", "zfq4@gmail.com", 400)
  
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
