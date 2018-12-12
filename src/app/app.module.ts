import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { EcmPageComponent } from './ecm-page/ecm-page.component';
import { TMPageComponent } from './tm-page/tm-page.component';
import { TempPageComponent } from './temp-page/temp-page.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { SubmitApprovalComponent } from './submit-approval/submit-approval.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: EcmPageComponent },
  { path: 'tm-page',  component: TMPageComponent },
  { path: 'submit', component: SubmitApprovalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    LoginComponent,
    EcmPageComponent,
    TMPageComponent,
    TempPageComponent,
    BottomNavComponent,
    FavoritePageComponent,
    SubmitApprovalComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
