import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP } from '@ionic-native/http';
import { PinDialog } from '@ionic-native/pin-dialog';
import { NativeHttpInterceptor } from '../interceptor/native-http.interceptor';
import { EnsureImportedOnceModule } from './ensure-imported-once.guard';


@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    // IonicModule.forRoot(),
    // AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // HttpClientModule,

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
    PinDialog,
  ],
  exports: [CoreComponent]
})
export class CoreModule extends EnsureImportedOnceModule {
  public constructor(@SkipSelf() @Optional() parent: CoreModule) {
      super(parent);
  }
}
