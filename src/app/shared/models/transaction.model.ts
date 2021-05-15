export class Transaction {
  id: string;
  dist: any;
  client: any;
  amount: number;
  doneAt: any;
  typeDeposit: string;



  constructor(ob?){
    ob.doneAt[1] = ob.doneAt[1] - 1
    let doneAt: [7] = ob.doneAt.slice(0,6);

    this.id = ob.id;
    this.dist = ob.dist;
    this.client = ob.client;
    this.amount = ob.amount;
    this.doneAt = new Date(...doneAt);
    this.typeDeposit = ob.typeDeposit;
  }
}
