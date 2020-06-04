import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveTasksComponent } from './component/active-tasks/active-tasks.component';
import { DoneTasksComponent } from './component/done-tasks/done-tasks.component';
import { ActiveDetailedComponent } from './component/active-detailed/active-detailed.component';
import { DoneDetailedComponent } from './component/done-detailed/done-detailed.component';
import { TabsRequestComponent } from './component/tabs-request/tabs-request.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent  } from './component/welcome/welcome.component';
import { HomeComponent } from './component/home/home.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AddWorkerComponent } from './component/add-worker/add-worker.component';
import { AddServiceComponent } from './component/add-service/add-service.component';
import { RequestComponent } from './component/request/request.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { EmpProfileComponent } from './component/emp-profile/emp-profile.component';
import { TransactionsComponent } from './component/transactions/transactions.component';
import { TabsEmpComponent } from './component/tabs-emp/tabs-emp.component';
import { ViewServiceComponent } from './component/view-service/view-service.component';
import { ViewRequestComponent } from './component/view-request/view-request.component';
import { ProfileUpdateComponent } from './component/profile-update/profile-update.component';
import { AdminPasswUpdateComponent } from './component/admin-passw-update/admin-passw-update.component';
//{path :'' , component : MenuComponent},

const routes: Routes = [
    {path :'login' , component : LoginComponent},
    {path:'home', component: HomeComponent ,children :[
                                                                  {path :'welcome' , component : WelcomeComponent},
                                                                  {path :'page' , component : SidenavComponent },
                                                                  {path :'admin-passw-update' , component : AdminPasswUpdateComponent },
                                                                  {path :'admin-profile' , component : ProfileComponent },
                                                                  {path :'admin-profile-update' , component : ProfileUpdateComponent },
                                                                  {path :'view-request' , component : ViewRequestComponent },
                                                                  {path :'add-employee' , component : AddWorkerComponent },
                                                                  {path :'add-service' , component : AddServiceComponent },
                                                                  {path :'requests' , component : RequestComponent },
                                                                  {path :'user-accounts' , component : ListUserComponent },
                                                                  {path :'tabs-emp' , component : TabsEmpComponent},
                                                                  {path :'view-service' , component : ViewServiceComponent},
                                                                  {path :'transaction-history' , component : TransactionsComponent},
                                                                  {path :'profile-emp' , component : EmpProfileComponent},
                                                                  {path :'profile-user' , component : UserProfileComponent},
                                                                  {path :'tabs' , component : TabsComponent},
                                                                  // {path :'login' , component : LoginComponent},
                                                                  {path :'tabs-request' , component : TabsRequestComponent},
                                                                    {path :'done-detailed-request' , component : DoneDetailedComponent},
                                                                  {path :'active-detailed-request' , component : ActiveDetailedComponent},
                                                                  {path :'done-requests' , component : DoneTasksComponent},
                                                                  {path :'active-requests' , component : ActiveTasksComponent},]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
