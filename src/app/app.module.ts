import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomComponent } from './bottom/bottom.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { ArrowComponent } from './arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomComponent,
    HeaderComponent,
    CenterComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
