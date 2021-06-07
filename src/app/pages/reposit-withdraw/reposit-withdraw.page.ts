import { Component, OnInit } from '@angular/core';
import { IonNav, ModalController, NavParams } from '@ionic/angular';
import { Client } from 'src/app/shared/models/client.model';
import { AccountService } from 'src/app/shared/services/account.service';
import { MontantPage } from '../depot-retrait/montant/montant.page';

import { Plugins } from "@capacitor/core";
const  { Contacts } = Plugins;
import { Contact } from "@capacitor-community/contacts"
import { isPlatform } from '@ionic/angular';
import { CustomContact } from 'src/app/shared/models/custom-contact.model';

@Component({
  selector: 'app-reposit-withdraw',
  templateUrl: './reposit-withdraw.page.html',
  styleUrls: ['./reposit-withdraw.page.scss'],
})
export class RepositWithdrawPage implements OnInit {

  receiver: string="";
  transType: string;
  nextPage: any = MontantPage;
  chooseUserPage: any
  listCl: Client[];
  firstList: Client[];
  name: string = "";
  contacts: Contact[] = [];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private nav: IonNav,
    private accountService: AccountService,
    ) {

    }

  ngOnInit() {
    this.transType = this.navParams.get('data');
    this.accountService.getClDist().subscribe( data => {
      this.firstList = data;
      this.listCl = data;
    });

    this.loadContacts();

  }

  async loadContacts() {
    if (isPlatform('android')) {
      let permission = await Contacts.getPermissions();
      console.log("Permission: ", permission.granted)
      if (!permission.granted) {
        return;
      }
    }
    console.log("Passed")
    Contacts.getContacts().then((result) => {
      this.contacts = result.contacts.filter((contact: Contact) => contact.phoneNumbers.length!=0);
      this.contacts.sort((c1, c2) => c1.displayName > c2.displayName? 1: -1);
    });
  }

  async filterList(evt) {
    // console.log("Contact 0", this.contacts[0].phoneNumbers[0].number)
    this.listCl = this.firstList
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.listCl = this.listCl.filter(currentFood => {
      if (currentFood.number && searchTerm) {
        return (currentFood.number.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  dismiss() {
    this.modalController.dismiss()
  }

  async goForward() {
    this.nav.push(this.nextPage, {receiver: this.receiver, transType: this.transType, name: this.name});
  }

  chooseUser() {
    this.nav.push(this.chooseUserPage);
  }

  takeClient(el: Client) {
    this.receiver = el.number;
    this.name = el.firstName + " " + el.lastName;
    this.goForward()
  }

  takeContact(el: CustomContact) {
    this.receiver = el.phoneNumber;
    this.name = el.displayName;
    this.goForward()
  }

  next(){
    if(this.receiver.length == 9) {
      this.accountService.getClient(this.receiver).subscribe(client =>
        {
          this.receiver = client.number;
        });
    }
    this.goForward()
  }
}
