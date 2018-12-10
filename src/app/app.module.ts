import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { EcmPageComponent } from './ecm-page/ecm-page.component';
import { TMPageComponent } from './tm-page/tm-page.component';
import { TempPageComponent } from './temp-page/temp-page.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'tm-page',  component: TMPageComponent },
  { path: 'CustomerDossiers', component: TempPageComponent},
  { path: 'TemplateDossierStructure', component: TempPageComponent},
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
