import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController
    ) { }

  getAccount(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${environment.serverURL}/api/v1/deposits`)
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
