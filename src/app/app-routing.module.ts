import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AddclientComponent } from './addclient/addclient.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { UserComponent } from './user/user.component';
import { UserClientListPageComponent } from './user-client-list-page/user-client-list-page.component';
import { UserAlertsPageComponent } from './user-alerts-page/user-alerts-page.component';
import { AdminAlertsPageComponent } from './admin-alerts-page/admin-alerts-page.component';


const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'admin', component:AdminSignUpComponent},
  {path:'clientlist', component:ClientlistComponent},
  {path:'addClient', component:AddclientComponent},
  {path:'updateClient/:id', component:UpdateclientComponent},
  {path:'userLogin', component:UserComponent},
  {path:'userClientList', component:UserClientListPageComponent},
  {path:'UserAlertPage/:machineName', component:UserAlertsPageComponent},
  {path:'adminAlertPage/:machineName', component:AdminAlertsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
