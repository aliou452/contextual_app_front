import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MenuController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { finalize } from 'rxjs/operators';
import {LoadingController} from '@ionic/angular';
import { AuthResponse } from 'src/app/shared/models/auth-response';
import { User } from 'src/app/shared/models/user';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.page.html',
  styleUrls: ['./starting.page.scss'],
})
export class StartingPage implements OnInit {

  data : string;
  error : string;
  loading : any;
  firstName: string;
  lastName: string;
  number: string;

  constructor(private http : HttpClient, public loadingController: LoadingController,
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService
    ) {
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




  async ngOnInit() {
    await this.authService.getUser().subscribe(
      res => {
        console.log("Response:")
        console.log(JSON.parse(JSON.stringify(res))["firstName"])
        this.firstName = JSON.parse(JSON.stringify(res))["firstName"]
        this.lastName = JSON.parse(JSON.stringify(res))["lastName"]
        this.number = JSON.parse(JSON.stringify(res))["number"]
        console.log(this.number)
      }
    )
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

  async logout() {
    console.log("Loging out")
    await this.authService.logout()

  }

}
