import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Transactions } from '../models/transactions.model';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController
    ) { }

  getTransaction(): Observable<Transactions[]> {
    return this.httpClient.get<Transactions[]>(`${environment.serverURL}/api/v1/transfers`)
  }

  send(receiver: string, amount: number, password: string) {
    return this.httpClient.post(`${environment.serverURL}/api/v1/transfers`,{
      receiver: receiver, amount: amount, code: password
    })
    // .pipe(
    //   tap(() => this.navCtrl.navigateRoot("/home/start/start"))
    // )
  }
}
