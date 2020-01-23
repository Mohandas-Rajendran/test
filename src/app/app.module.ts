import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngHeaderComponent } from './ang-header/ang-header.component';
import { AngServiceService } from './ang-service.service';
import { HttpClientModule } from "@angular/common/http";

//ngModel needs this import
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AngHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AngServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
