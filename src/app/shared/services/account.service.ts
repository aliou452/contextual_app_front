import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { NavController } from '@ionic/angular';
import { Transaction } from '../models/transaction.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController
    ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<any[]>(`${environment.serverURL}/api/v1/transactions`)
    .pipe(
      map((data: any[]) => {
        let trans = [];
        data.forEach((d) => trans.push(new Transaction(d)));
        return trans;
      })
    )
  }

  depot(receiver: string, amount: number, password: string, typeDep: string) {
    return this.httpClient.post(`${environment.serverURL}/api/v1/deposits`,{
      number: receiver, amount: amount, code: password, type: typeDep
    })
  }

  retrait(receiver: string, amount: number, password: string) {
    return this.httpClient.post(`${environment.serverURL}/api/v1/withdrawal`,{
      number: receiver, amount: amount, code: password
    })
  }

  order(amount: number, code: string, typeOrder: string) {
    return this.httpClient.post(`${environment.serverURL}/api/v1/orders`,{
      amount: amount, code: code, typeOrder: typeOrder
    })
  }
}
