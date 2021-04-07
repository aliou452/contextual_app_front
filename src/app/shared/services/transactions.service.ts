import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Transactions } from '../models/transactions.model';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  getTransaction(id: number): Observable<Transactions[]> {
    return this.httpClient.get<Transactions[]>(`${environment.serverURL}/api/v1/${id}/transfers`)
  }
}
