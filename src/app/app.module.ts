import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ErrorComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
