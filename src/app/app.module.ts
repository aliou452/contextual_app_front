import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NativeHttpInterceptor } from './interceptor/native-http.interceptor';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

export function tokenGetter(): string | null {
  console.log("getToken: ", localStorage.getItem('jwt_token'))
  return localStorage.getItem('jwt_token');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["192.168.43.89"]
      }
    })

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: NativeHttpInterceptor, multi: true },
    HTTP,
    // AndroidPermissions,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
