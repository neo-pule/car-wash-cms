//  author : Neo Puleng Malemela;gitHub: neo-pule;email:malemlaneopule@gmail.com
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatTabsModule } from '@angular/material/tabs';

      //Component'

  import { AppComponent } from './app.component';
  import { LoginComponent } from './component/login/login.component';
  import { WelcomeComponent  } from './component/welcome/welcome.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AddWorkerComponent } from './component/add-worker/add-worker.component';
import { AddServiceComponent } from './component/add-service/add-service.component';
import { RequestComponent } from './component/request/request.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { environment } from '../environments/environment';


import { AuthGuardService } from './services/auth-guard.service';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { EmpProfileComponent } from './component/emp-profile/emp-profile.component';
import { TransactionsComponent } from './component/transactions/transactions.component';
import { TabsEmpComponent } from './component/tabs-emp/tabs-emp.component';
import { ActiveTasksComponent } from './component/active-tasks/active-tasks.component';
import { DoneTasksComponent } from './component/done-tasks/done-tasks.component';
import { ActiveDetailedComponent } from './component/active-detailed/active-detailed.component';
import { DoneDetailedComponent } from './component/done-detailed/done-detailed.component';
import { TabsRequestComponent } from './component/tabs-request/tabs-request.component';
import { ViewServiceComponent } from './component/view-service/view-service.component';
import { ViewRequestComponent } from './component/view-request/view-request.component';
import { ProfileUpdateComponent } from './component/profile-update/profile-update.component';
import { AdminPasswUpdateComponent } from './component/admin-passw-update/admin-passw-update.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    LoginComponent,
    WelcomeComponent,
    HomeComponent,
    SidenavComponent,
    ProfileComponent,
    AddWorkerComponent,
    AddServiceComponent,
    RequestComponent,
    ListUserComponent,
    UserProfileComponent,
    EmpProfileComponent,
    TransactionsComponent,
    TabsEmpComponent,
    ActiveTasksComponent,
    DoneTasksComponent,
    ActiveDetailedComponent,
    DoneDetailedComponent,
    TabsRequestComponent,
    ViewServiceComponent,
    ViewRequestComponent,
    ProfileUpdateComponent,
    AdminPasswUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    // LayoutModule,
    // MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    // MatIconModule,
    // MatListModule,
    MatInputModule,
    // MatSelectModule,
    // MatRadioModule,
    MatCardModule,
    // ReactiveFormsModule,
    // MatGridListModule,
    // MatRippleModule,
    // MatSlideToggleModule,
    //
    MatDialogModule,
    // MatTooltipModule
  ],
  providers: [AuthGuardService,TabsComponent,AdminPasswUpdateComponent,ProfileUpdateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
