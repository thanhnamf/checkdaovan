import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { KdoComponent } from './components/kdo/kdo.component';
import { AtuanComponent } from './components/atuan/atuan.component';
import { TsexComponent } from './components/tsex/tsex.component';
import { GateComponent } from './components/gate/gate.component';
import { TnamComponent } from './components/tnam/tnam.component';
import { MbinComponent } from './components/mbin/mbin.component';
import { DbhComponent } from './components/dbh/dbh.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    KdoComponent,
    AtuanComponent,
    TsexComponent,
    GateComponent,
    TnamComponent,
    MbinComponent,
    DbhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
