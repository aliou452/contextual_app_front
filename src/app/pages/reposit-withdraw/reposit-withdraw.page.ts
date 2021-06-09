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
import { Observable, of } from 'rxjs';

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
  contacts: CustomContact[] = [];
  firstContacts: CustomContact[] = [];
  load: boolean = true;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private nav: IonNav,
    private accountService: AccountService,
    ) {

    }

  ngOnInit() {
    console.log("First length: ", this.contacts.length)
    // this.transType = this.navParams.get('data');
    // this.accountService.getClDist().subscribe( data => {
    //   this.firstList = data;
    //   this.listCl = data;
    // });

    // this.accountService.contactObs.subscribe(contacts => {
    //   this.firstContacts = contacts
    //   this.contacts = contacts
    // });

  }

  ionViewDidEnter() {
    this.transType = this.navParams.get('data');
    this.accountService.getClDist().subscribe( data => {
      this.firstList = data;
      this.listCl = data;
    });
    this.accountService.loadContacts()
    this.accountService.contactObs.subscribe(contacts => {
      this.firstContacts = contacts
      this.contacts = contacts
      console.log("Load: ", this.contacts.length)
    });
  }

  filterList(evt) {
    this.listCl = this.firstList
    this.contacts = this.firstContacts
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.listCl = this.listCl.filter(currentContact => {
      if (currentContact.number && searchTerm) {
        const fullName = currentContact.firstName + " " + currentContact.lastName;
        return (currentContact.number.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) ||
        (fullName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });

    this.contacts = this.contacts.filter(currentContact => {
      if (currentContact.phoneNumber && searchTerm) {
        return (currentContact.phoneNumber.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) ||
        (currentContact.displayName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
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
