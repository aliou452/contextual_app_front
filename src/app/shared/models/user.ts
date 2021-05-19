export class User {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  number?: string;
  pocket?: number;;
  seddo?: number;

  constructor({username = null, password = null, firstName = null,
    lastName = null, number = null,
    pocket = null, seddo = null}
    ){
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
    this.pocket = pocket;
    this.seddo = seddo;
  }
}
