import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { finalize } from 'rxjs/operators';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.page.html',
  styleUrls: ['./starting.page.scss'],
})
export class StartingPage implements OnInit {

  data : string;
  error : string;
  loading : any;

  constructor(private http : HttpClient, public loadingController: LoadingController) {
    this.data = 'Test';
    this.error = '';
   }

   
   async ionViewWillEnter() {
    await this.presentLoading();
     this.prepareDataRequest()
     .pipe(
      finalize(async () => {
          // Hide the loading spinner on success or error
          await this.loading.dismiss();
      })
  )
     .subscribe(
       data => {
         this.data = JSON.stringify(data);
       },
       err => {
         this.error = "Erreur, données introuvables : Status : ${err.status}, Message: ${err.statusText}";
       })
   }

  ngOnInit() {
  }

  //  sendPostRequest() {
  //    var headers = new Headers();
  //    headers.append("Accept", 'application/json');
  //    headers.append('Content-Type', 'application/json' );
  //    const requestOptions = new RequestOptions({ headers: headers });

  //    let postData = {
  //      "username" : "771438896",
  //      "password" : "2525"
  //    }

  //    this.http.post("https://contextual-krq5flbcea-uc.a.run.app/login", postData, requestOptions)
  //      .subscribe(data => {
  //        console.log(data['_body']);
  //       }, error => {
  //        console.log(error);
  //      });
  //  }

  private prepareDataRequest() : Observable<object> {
    const dataUrl = 'https://contextual-krq5flbcea-uc.a.run.app/api/v1/info';
    return this.http.get(dataUrl);
  }

  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
        message: 'Chargement...'
    });
    // Present the loading controller
  await this.loading.present();
}

}
