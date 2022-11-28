import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  transactions: any = [];
  constructor(private http: HttpClient) {
    this.getJson().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.transactions.push(data[i]);
      }
    });
  }

  public getJson(): Observable<any> {
    return this.http.get('./assets/data/transactions.json');
  }

  orderBy(val: string) {
    switch (val) {
      case 'index':
        this.transactions.sort((a: any, b: any) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        );
        break;
      case 'amount':
        this.transactions.sort((a: any, b: any) =>
          a.amount > b.amount ? 1 : b.amount > a.amount ? -1 : 0
        );
        break;
      case 'balance':
        this.transactions.sort((a: any, b: any) =>
          a.balance > b.balance ? 1 : b.balance > a.balance ? -1 : 0
        );
        break;
      case 'label':
        this.transactions.sort((a: any, b: any) =>
          a.label > b.label ? 1 : b.label > a.label ? -1 : 0
        );
        break;
      case 'date':
        this.transactions.sort((a: any, b: any) =>
          a.date > b.date ? 1 : b.date > a.date ? -1 : 0
        );
        break;
    }
  }
}
