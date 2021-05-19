export class Transaction {
  id: string;
  dist: any;
  client: any = null;
  amount: number;
  doneAt: any;
  transactionType: string;

  constructor(ob?){
    ob.doneAt[1] = ob.doneAt[1] - 1
    let doneAt: [7] = ob.doneAt.slice(0,6);

    if(ob.amount<0 || ob.transactionType=="MONEY_WITHDRAW"){
      this.client = ob.client
    }

    this.id = ob.id;
    this.dist = ob.dist;
    this.amount = ob.amount;
    this.doneAt = new Date(...doneAt);
    this.transactionType = ob.transactionType;
  }
}
