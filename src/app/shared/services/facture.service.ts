import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Facture } from '../models/facture.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }

  getFactures(contract: string): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${environment.serverURL}/api/v1/factures/${contract}/onefactures`);
  }

  payFacture(factId: string, code: string) {
    return this.http.post(`${environment.serverURL}/api/v1/onefactures/${factId}`, {code: code})
  }

  getContract(contract: string): Observable<boolean> {
    return this.http.get<boolean>(`${environment.serverURL}/api/v1/factures/${contract}`);
  }
}
