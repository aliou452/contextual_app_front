import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { from, Observable, ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";
import { Transaction } from '../models/transaction.model';
import { Client } from '../models/client.model';
import { PinDialog } from '@ionic-native/pin-dialog/ngx';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _transactions = new ReplaySubject<Transaction[]>(1);
  public transactionsObs = this._transactions.asObservable();

  constructor(
    private httpClient: HttpClient,
    private pinDialog: PinDialog,
    private platform: Platform
    ) { }

  getTransactions(){
    this.httpClient.get<any[]>(`${environment.serverURL}/api/v1/transactions`)
    .pipe(
      map((data: any[]) => {
        let trans = [];
        data.forEach((d) => trans.push(new Transaction(d)));
        return trans;
      })
    ).subscribe( trans => this._transactions.next(trans), error => console.log(error));
  }

  depot(receiver: string, amount: number, password: string) {
    return this.httpClient.post(`${environment.serverURL}/api/v1/deposits`,{
      number: receiver, amount: amount, code: password, type: "MONEY"
    })
  }

  seddo(receiver: string, amount: number, password: string) {
    return this.httpClient.post(`${environment.serverURL}/api/v1/deposits`,{
      number: receiver, amount: amount, code: password, type: "SEDDO"
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

  getClDist(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${environment.serverURL}/api/v1/cldist`);
  }

  getClient(num: string): Observable<Client>{
    return this.httpClient.get<Client>(`${environment.serverURL}/api/v1/clients/${num}`)
  }

  pinDialogFunc() {
    return this.platform.ready().then(() =>
      this.pinDialog.prompt(' ', 'Entrez votre code secret: ', ['OK', 'Annuler'])
    )
  }
}
