import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { EcmPageComponent } from './ecm-page/ecm-page.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component'

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: EcmPageComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    LoginComponent,
    EcmPageComponent,
    BottomNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
