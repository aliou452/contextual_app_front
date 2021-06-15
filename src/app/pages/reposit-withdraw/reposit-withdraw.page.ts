import { Component, OnInit } from '@angular/core';
import { IonNav, ModalController, NavParams } from '@ionic/angular';
import { Client } from 'src/app/shared/models/client.model';
import { AccountService } from 'src/app/shared/services/account.service';
import { MontantPage } from '../depot-retrait/montant/montant.page';
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
  contacts: CustomContact[] = [];
  firstContacts: CustomContact[] = [];
  loading: boolean[] = [true, true];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private nav: IonNav,
    private accountService: AccountService,
    ) {

    }

  ngOnInit() {
    this.loading = [true, true];
    setTimeout(() => {
      this.loading = [false, false]
    }, 200)
    console.log("First length: ", this.contacts.length)
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
    const searchTerm: String = evt.srcElement.value;

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
      if (currentContact.phoneNumbers && searchTerm) {
        const phoneNumbers = currentContact.phoneNumbers.filter(phone => phone.number.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        return phoneNumbers.length ||
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

  takeClient(el: Client) {
    this.receiver = el.number;
    this.name = el.firstName + " " + el.lastName;
    this.goForward()
  }

  takeContact(el: CustomContact) {
    this.receiver = el.phoneNumbers[0].number;
    this.name = el.displayName;
    this.goForward()
  }
}
