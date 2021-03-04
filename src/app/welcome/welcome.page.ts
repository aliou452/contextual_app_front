import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  src1 = "https://www.orange.sn/sites/default/files/images/contact/ibou.svg"
  src2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORaTJ-Tpq-QUIIiFP8JAdIHgai2S1TqtTbA&usqp=CAU"
  src3 = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fclientespace.com%2Fwp-content%2Fuploads%2F2020%2F10%2Ftaris-orange-money-frais-retrait-argent.jpg&imgrefurl=https%3A%2F%2Fclientespace.com%2Forange-money-senegal-frais-et-tarif-de-transfert-et-retrait%2F&tbnid=G-Ed1jL0CN49HM&vet=12ahUKEwiF-ICAlZTvAhVM3RoKHdlnB7gQMygNegUIARDBAQ..i&docid=qdLP-n_7_yHn8M&w=193&h=261&q=orange%20money%20&safe=active&ved=2ahUKEwiF-ICAlZTvAhVM3RoKHdlnB7gQMygNegUIARDBAQ"
  ngOnInit() {
  }

}
