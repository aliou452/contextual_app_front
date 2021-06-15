export class CustomContact {
  displayName: string;
  phoneNumbers: PhoneNumber[];

  constructor({displayName = null, phoneNumbers = null}){
    this.displayName = displayName;
    this.phoneNumbers = phoneNumbers;
  }
}

export interface PhoneNumber {
  number?: string;
}
