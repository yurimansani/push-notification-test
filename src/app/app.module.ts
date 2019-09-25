import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Firebase } from '@ionic-native/firebase/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FmcService } from './fmc.service';

const firebase = {
  "firebase_url": "https://test-projeto-push-notification.firebaseio.com",
  "project_id": "test-projeto-push-notification",
  "storage_bucket": "test-projeto-push-notification.appspot.com",
  "apiKey": "AIzaSyAKiN2y5tSl59l5_WnqmrMnJdUJHRwdFG8",
  "senderId": "211563160794",
  "authDomain": "test-projeto-push-notification.firebaseapp.com"
 }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // {provide: ErrorHandler, useClass: IonicErrorHandler}
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    FmcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// providers: [
//   StatusBar,
//   SplashScreen,
//   Firebase,
//   {provide: ErrorHandler, useClass: IonicErrorHandler}
// ]