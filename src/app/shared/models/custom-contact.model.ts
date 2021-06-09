export class CustomContact {
  displayName: string;
  phoneNumber: string;

  constructor({displayName = null, phoneNumber = null}){
    this.displayName = displayName;
    this.phoneNumber = phoneNumber;
  }
}
