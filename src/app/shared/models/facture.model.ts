import { formatDate } from "@angular/common";

export class Facture {
  id: string;
  paymentDay: any;
  amount: number;
  paid: string;

  constructor(obj?: any) {
    this.id = obj.id;
    this.amount = obj.amount;
    this.paid = obj.paid;
    const date = new Date();
    date.setFullYear(obj[0], obj[1], obj[1]);
    this.paymentDay = formatDate(date, "longDate", "fr");

  }
}
