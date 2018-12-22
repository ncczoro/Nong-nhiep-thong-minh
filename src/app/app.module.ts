import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import { HttpClientModule } from '@angular/common/http';

import { TodoService } from './Service/todo.service';
import { SignInComponent } from './Components/user/sign-in/sign-in.component';
import { SignUpComponent } from './Components/user/sign-up/sign-up.component';
import { HomeComponent } from './Components/home/home.component';
import { appRouter } from './Components/Router';
import { ADminComponent } from './Components/ADmin/ADmin.component';
import { LoginGuard } from './Service/login.guard';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeHomeComponent } from './Components/home-home/home-home.component';


// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';




import {environment} from '../environments/environment'
import { MyFirebabeServiceService } from './FirebaseService/my-firebabe-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ADminComponent,
    HeaderComponent,
    FooterComponent,
    HomeHomeComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
     
    RouterModule.forRoot(appRouter),
    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    TodoService,
    LoginGuard,
    MyFirebabeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
