import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";
import { Transaction } from '../models/transaction.model';
import { Client } from '../models/client.model';
import { PinDialog } from '@ionic-native/pin-dialog/ngx';
import { isPlatform, Platform } from '@ionic/angular';
import { Plugins } from "@capacitor/core";
const  { Contacts } = Plugins;
import { Contact } from "@capacitor-community/contacts"
import { CustomContact } from '../models/custom-contact.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _transactions = new ReplaySubject<Transaction[]>(1);
  public transactionsObs = this._transactions.asObservable();
  private _contacts = new ReplaySubject<CustomContact[]>(1);
  public contactObs = this._contacts.asObservable();

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

  async loadContacts() {
    if (isPlatform('android')) {
      let permission = await Contacts.getPermissions();
       if (!permission.granted) {
        return;
      }
    }

    Contacts.getContacts().then((result: {contacts: Contact[]}) => {
      const contacts = result.contacts.filter((contact) => contact.phoneNumbers.length!=0 && contact.displayName)
                                      .map((contact) => {
                                        return  new CustomContact({displayName: contact.displayName, phoneNumbers: contact.phoneNumbers});;
                                      });
      contacts.sort((c1, c2) => c1.displayName > c2.displayName? 1: -1);
      this._contacts.next(contacts);
    });
  }
}
