import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(routes),
    LoginModule,
    DashboardModule,
    SharedModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRs8dJH8luo1qJLnK9XdoAFPzB-ZksGN4 '
    }),
  ],
  providers: [    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
