import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NavController } from '@ionic/angular';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HTTP } from "@ionic-native/http/ngx";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private readonly jwtTokenName = "jwt_token";
  private authUser = new ReplaySubject<String | null>(1);
  public AuthUserObservable = this.authUser.asObservable();

  constructor(
    private http: HTTP,
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
    private navCtrl: NavController) {}



    hasAccess(): Promise<boolean> {
      const jwt = localStorage.getItem(this.jwtTokenName);

      if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {

        return new Promise((resolve, _) => {

          this.httpClient.get(`${environment.serverURL}/authenticate`)
            .subscribe(() => {
                this.authUser.next(jwt);
                resolve(true);
              },
              err => {
                this.logout();
                resolve(false);
              });
        });
      } else {
        this.logout();
        return Promise.resolve(false);
      }
    }

  logout(): void {
    localStorage.removeItem(this.jwtTokenName);
    this.authUser.next(null);
    this.navCtrl.navigateRoot('home/login', {replaceUrl: true});
  }

  login(values: { username: string, password: string }) {
    this.http.setDataSerializer("json")

     this.http.post(`${environment.serverURL}/login`,
            {username: values.username, password: values.password},
            {'Content-Type': 'application/json'}
          )
    .then((data) => {
      let jwt : string = JSON.stringify(data.headers.authorization.split(" ")[1])
      this.handleJwtResponse(jwt);
      }
    )
    .catch((error) => {
        console.log("Error: ")
        console.log(JSON.stringify(error));
      }
    );
  }

  private handleJwtResponse(jwt: string): string {
    console.log("jwt: ", jwt)
    localStorage.setItem(this.jwtTokenName, jwt);
    this.authUser.next(jwt);
    this.navCtrl.navigateRoot("/home/start")
    return jwt;
  }

  // signup(values: { firstName: string, lastName: string, number: string, code: string }): Observable<string> {
  //   return this.http.post(`${environment.serverURL}/registration`, values, {responseType: 'text'})
  //     .pipe(tap(jwt => {
  //       if (jwt !== 'EXISTS') {
  //         return this.handleJwtResponse(jwt);
  //       }
  //       return jwt;
  //     }));
  //   }
}
