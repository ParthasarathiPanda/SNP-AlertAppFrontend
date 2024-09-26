import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AddclientComponent } from './addclient/addclient.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { UserComponent } from './user/user.component';
import { UserClientListPageComponent } from './user-client-list-page/user-client-list-page.component';
import { UserAlertsPageComponent } from './user-alerts-page/user-alerts-page.component';
import { AdminAlertsPageComponent } from './admin-alerts-page/admin-alerts-page.component';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminSignUpComponent,
    ClientlistComponent,
    AddclientComponent,
    UpdateclientComponent,
    UserComponent,
    UserClientListPageComponent,
    UserAlertsPageComponent,
    AdminAlertsPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
